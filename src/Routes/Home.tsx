import {useState} from 'react';
import {useQuery} from 'react-query';
import {getMovies, IMovie,getMoviesList,IMovieList} from '../api';
import styled from 'styled-components';
import { makeImagePath } from '../Utils';
import {motion,AnimatePresence} from 'framer-motion';
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
    top:-300px;
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



console.log(window.innerWidth+100);

function Home() {
    const {data,isLoading,isError} = useQuery<IMovie>(['movies','nowPlaying','nowError'],getMovies); // isLoading 은 한번만 되는가
    const list = useQuery<IMovieList>('list',getMoviesList);
    const [index,setIndex] = useState(0);
    const [leaving,setLeaving] = useState(false);
    const offset = 6;
    const increaseIndex = ()=> {
        if (leaving) return;
        toggleLeaving();
        const totalMovie = list.data?.results.length;
        const maxIndex = Math.ceil(totalMovie!/offset) -1;
        setIndex(prev=>prev === maxIndex ? 0 : prev+1);
    };
    const toggleLeaving = ()=> setLeaving((prev)=>!prev);
    const width = useWindowDimensions();
    console.log('a',list.data?.results);
    console.log(data,data?.title);
    console.log('모니터 회전여부',window.matchMedia('(orientation: landscape)').matches)
    
    return <Wrapper>{isLoading?
    (
    <Loader>Loading...</Loader>
    )
    :
    (
    <>
        <Banner 
        onClick={increaseIndex} 
        bgPhoto={makeImagePath(data?.backdrop_path||"")}
        
        >
            <Title>{data?.title}</Title>
            <Overview>{data?.overview}</Overview>
        </Banner>
        <Slider>
            {/*
             * initial={false} 안쓰면 animate가 되는 상태로 시작한다. 
             * onExitComplete 는 exit 중인 모든 노드들이 애니메이션을 끝내면 실행되게 해줍니다. 
             * 
             */}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                <Row initial={{ x: width + 10 }} animate={{ x: 0 }} exit={{ x: -width - 10 }} transition={{type:"tween",duration:1}} key={index}>
                    {list.data?.results.slice(offset*index,offset*index+offset).map((datas,i)=><Boxes id={datas.id} title={datas.name} description={datas.description} index={i}/>)}
                </Row>
            </AnimatePresence>
        </Slider>
    </>
    )}</Wrapper>
}

export default Home;