import {useState} from 'react';
import {useQuery} from 'react-query';
import { useHistory,useRouteMatch } from 'react-router';
import {getMovies, IMovie,getMoviesList,IMovieList} from '../api';
import styled from 'styled-components';
import { makeImagePath } from '../Utils';
import {motion,AnimatePresence,useScroll} from 'framer-motion';
import useWindowDimensions from '../useWindowDimensions';
import Boxes from '../Components/Boxes'
const Wrapper = styled.div`
    background-color: black;
`;
const Loader = styled.div`
    height:20vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;
 const Banner = styled.div<{bgPhoto:string}>`
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding:60px;
    background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url(${props=>props.bgPhoto});
    background-size:cover;
    background-attachment: fixed;
 `;
 const Title = styled.h2`
    font-size:48px;
    margin-bottom:20px;
    font-weight: bold;
 `;
 const Overview = styled.p`
    font-size:24px;
    width:50%;
  `;
const Slider = styled(motion.div)`
    position: relative;
    top:-100px;
`;
const Row = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(6,1fr);
    gap:5px;
    width:100%;
    position: absolute;
    background-color:black;
    padding: 0 0px 10px;
`;

const Overlay = styled(motion.div)`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    opacity:0;
`;

const BigMovie = styled(motion.div)`
 position : absolute;
 width:40vw;
 height:80vh;
 overflow-y: auto;
 background-color: rgba(0,0,0,0.5);
 left:0;
 right:0;
 margin:0 auto;
 display:flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 text-align:center;
    h2 {width:80%; font-size:25px; padding:10px 0 20px 0; font-weight:bold;}
    img {width:50%;}
    p {width:80%; padding:20px 20px 10px; font-size:18px; text-align:justify;}
`;
const VideoTitle = styled.h3`
padding:0 0 30px 60px;
font-size:30px;
font-weight:bold;
`;

console.log(window.innerWidth+100);



function Home() {
    const {scrollY} = useScroll();
    
    const {data,isLoading,isError} = useQuery<IMovie>(['movies','nowPlaying','nowError'],getMovies); // isLoading 은 한번만 되는가
    const list = useQuery<IMovieList>('list',getMoviesList);
    const [index,setIndex] = useState(0);
    const [leaving,setLeaving] = useState(false);
    const bigMovieMatch = useRouteMatch<{movieId:string}>("/movies/:movieId");
    
    const clickMovie = bigMovieMatch?.params.movieId && 
    list.data?.results.find((movie)=>movie.id+""===bigMovieMatch.params.movieId);
    console.log('클릭무비',clickMovie);
    console.log('aaaa',bigMovieMatch);
    const offset = 6;
    const increaseIndex = ()=> {
        if (leaving) return;
        toggleLeaving();
        const totalMovie = list.data?.results.length;
        const maxIndex = Math.ceil(totalMovie!/offset) -1;
        setIndex(prev=>prev === maxIndex ? 0 : prev+1);
    };
    //console.log(scrollY);
    const toggleLeaving = ()=> setLeaving((prev)=>!prev);
    const width = useWindowDimensions();
    console.log('a',list.data?.results);
   
    console.log('모니터 회전여부',window.matchMedia('(orientation: landscape)').matches)

    const history = useHistory();
    const onOverlayClick = () => history.push('/');
    return <Wrapper>{isLoading?
    (
    <Loader>Loading...</Loader>
    )
    :
    (
    <>
        <Banner 
        onClick={increaseIndex} 
        bgPhoto={makeImagePath(list.data?.results[0].backdrop_path||"")}
        
        >
            <Title>{list.data?.results[0].title}</Title>
            <Overview>{list.data?.results[0].overview}</Overview>
        </Banner>
        <Slider>
            <VideoTitle>시청중인 비디오</VideoTitle>
            {/*
             * initial={false} 안쓰면 animate가 되는 상태로 시작한다. 
             * onExitComplete 는 exit 중인 모든 노드들이 애니메이션을 끝내면 실행되게 해줍니다. 
             * 
             */}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                <Row initial={{ x: width + 10 }} animate={{ x: 0 }} exit={{ x: -width - 10 }} transition={{type:"tween",duration:1}} key={index}>
                    {list.data?.results.slice(offset*index,offset*index+offset).map((datas,i)=><Boxes id={datas.id} title={datas.title} description={datas.overview} index={i} imgPath={datas.backdrop_path} key={i} category="movies"/>)}
                </Row>
            </AnimatePresence>
        </Slider>
        <AnimatePresence>
            {bigMovieMatch?
            <>
            <Overlay onClick={onOverlayClick} animate={{opacity:1}} exit={{opacity:0}}></Overlay>
            <BigMovie layoutId={bigMovieMatch.params.movieId} style={{top:scrollY.get()+50}}>
            {clickMovie&&<>
                <h2>{clickMovie.title}</h2>
                <div><img src={`https://image.tmdb.org/t/p/original${clickMovie.poster_path}`}/></div>
                 {/**https://image.tmdb.org/t/p/${format?format:"original"}/${id}`; */}
                <p>{clickMovie.overview}</p>
            </>}

            </BigMovie>
            </>:null}
        </AnimatePresence>
    </>
    )}</Wrapper>
}

export default Home;