import React,{useEffect,useState} from 'react';
import { useLocation,useHistory,useRouteMatch } from "react-router";
import {useQuery} from 'react-query';
import {getSearchData, ISearchList} from '../api';
import styled from "styled-components";
import {motion,AnimatePresence,useScroll} from "framer-motion";

import useWindowDimensions from "../useWindowDimensions";
import Boxes from '../Components/Boxes';

const SearchWrap = styled.div`
padding-top:100px;
    h2 {text-align:center;}
    font-size:24px;
    font-weight:bold;
`;
const NoSearch = styled.div`
    padding-top:100px;
    font-size:24px;
    text-align:center;
    font-weight:bold;
`;
const TextRedColor = styled.span`
    color:${props=>props.theme.red}
`;
const Slider = styled(motion.div)`
    position: relative;
    margin-top:30px;
    
`;
const Row = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(6,1fr);
    gap:5px;
    width:100%;
    position: relative;
    background-color:black;
    padding: 0 0px 10px;
    margin-top:20px;
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
const SliderNextBtn = styled(motion.div)`
width:50px;
height:50px;
background:Red;
position:absolute;
top:0;
right:30px;
border-radius:100%;
background:rgba(0,0,0,0.5);
cursor:pointer;
    svg {width:30%; position:absolute; right: 0; left:0; top:0; bottom:0; margin:auto; fill:rgba(255,255,255,0.8);}
    
`;

const SliderBtnVariants = {
    initial: {fillOpacity:0.5},
    hover:{fillOpacity:1},
    
}; 
function Search() {
    const location = useLocation();
    console.log(location);
    const search = new URLSearchParams(location.search);
    const keyword = search.get("keyword");
    console.log('키워드만',keyword);
    const history = useHistory();
    const onOverlayClick = () => history.push(`/search?keyword=${keyword}`);
    const {refetch,data,isLoading} = useQuery<ISearchList>(['searchData','nowLoading','nowFetching'],()=>getSearchData(`${keyword}`)); 
    console.log(data);
    //movie
    const movieData = data?.results.filter(movie=>movie.media_type === "movie" && movie.backdrop_path!=null);
    //console.log('무비만',movieData);
    //tv

    //person 

    useEffect(()=>{
        refetch();
    },[keyword]);
   
    const width = useWindowDimensions();
    const {scrollY} = useScroll();
    const [index,setIndex] = useState(0);
    const [leaving,setLeaving] = useState(false);
    const toggleLeaving = ()=> setLeaving((prev)=>!prev);
   
    const offset = 6;
    const bigMovieMatch = useRouteMatch<{tvId:string}>(`/search/:tvId`);
    
    //console.log('빅매치',bigMovieMatch);
    const increaseIndex = ()=> {
        if (leaving) return;
        toggleLeaving();
        const totalMovie = data?.results.length;
        const maxIndex = Math.ceil(totalMovie!/offset) -1;
        setIndex(prev=>prev === maxIndex ? 0 : prev+1);
    };
    
    const clickMovie = bigMovieMatch?.params.tvId && 
    movieData?.find((tv)=>tv.id+""===bigMovieMatch.params.tvId);
    console.log('클릭무비',clickMovie);
   
    return keyword!=null?(
        <SearchWrap>
            <h2><TextRedColor>{keyword}</TextRedColor> 에 대한 검색결과가 <TextRedColor>{data?.results.length}</TextRedColor> 건 조회되었습니다.</h2>
            <div>
                
                <Slider>
                <h3>Movie</h3> 
                {movieData?.length!>=7?(<AnimatePresence>
                    <SliderNextBtn onClick={increaseIndex} key={"next"} variants={SliderBtnVariants} initial="initial" whileHover="hover">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                        <path d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                    </svg>
                    </SliderNextBtn>
                
                </AnimatePresence>):null}
                {/*
                 * initial={false} 안쓰면 animate가 되는 상태로 시작한다. 
                 * onExitComplete 는 exit 중인 모든 노드들이 애니메이션을 끝내면 실행되게 해줍니다. 
                 * 
                 */}
                    <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                        <Row initial={{ x: width + 10 }} animate={{ x: 0 }} exit={{ x: -width - 10 }} transition={{type:"tween",duration:1}} key={index}>
                            {movieData?.slice(offset*index,offset*index+offset).map((datas,i)=><Boxes id={datas.id} title={datas.title} description={datas.overview} index={i} imgPath={datas.backdrop_path} key={i} category="search" keyword={keyword!}/>)}
                        </Row>
                    </AnimatePresence>
                </Slider>
                <AnimatePresence>
                    {bigMovieMatch?
                    <>
                    <Overlay onClick={onOverlayClick} animate={{opacity:1}} exit={{opacity:0}}></Overlay>
                    <BigMovie layoutId={bigMovieMatch.params.tvId} style={{top:scrollY.get()+50}}>
                    {clickMovie&&<>
                        <h2>{clickMovie.title}</h2>
                        <div><img src={`https://image.tmdb.org/t/p/original${clickMovie.poster_path}`}/></div>
                        {/**https://image.tmdb.org/t/p/${format?format:"original"}/${id}`; */}
                        <p>{clickMovie.overview}</p>
                    </>}
        
                    </BigMovie>
                    </>:null}
                </AnimatePresence>
            </div>
            <div>
                <h3>TV</h3> 
            </div>
            <div>
                <h3>Person</h3> 
            </div>
        </SearchWrap>

    ):<div><NoSearch>검색내용이 없습니다. 우측상단의 검색버튼을 이용해주세요:)</NoSearch></div>;
}
export default Search; 