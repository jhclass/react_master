import {useState,useEffect} from 'react';
import {useQuery} from 'react-query';
import {getMovies, IMovie} from '../api';
import styled from 'styled-components';
import { makeImagePath } from '../Utils';
import {motion,AnimatePresence, useUnmountEffect} from 'framer-motion';
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
    gap:10px;
    width:100%;
    
    position: absolute;
    background-color:black;
    padding: 0 0px 10px;
   
  

`;

const Box = styled(motion.div)`
    background-color: white;
    height:200px;
    color:Red;
    font-size:64px;
`;

console.log(window.innerWidth+100)
const rowVariants = {
    hidden : {
        x: window.outerWidth +10,

    },
    visible : {x:0},
    exit : {x:-(window.outerWidth -10)},
} 


function Home() {
    const {data,isLoading} = useQuery<IMovie>(['movies','nowPlaying'],getMovies);
    const [index,setIndex] = useState(0);
    const increaseIndex = ()=> setIndex(prev=>prev+1);

    console.log(data,data?.title);
    console.log('모니터 회전여부',window.matchMedia('(orientation: landscape)').matches)
 
    return <Wrapper>{isLoading?
    (
    <Loader>Loading...</Loader>
    )
    :
    (
    <>
        <Banner bgPhoto={makeImagePath(data?.backdrop_path||"")}>
            <Title>{data?.title}</Title>
            <Overview>{data?.overview}</Overview>
        </Banner>
        <Slider>
            <AnimatePresence >
                <Row onClick={increaseIndex} variants={rowVariants} initial="hidden" animate="visible" exit="exit" transition={{type:"tween",duration:0.6}} key={index}>
                    {[0,1,2,3,4,5].map((i)=><Box key={i}>{i}</Box>)}
                </Row>
            </AnimatePresence>
        </Slider>
    </>
    )}</Wrapper>
}

export default Home;