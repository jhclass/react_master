import {useQuery} from 'react-query';
import {getMovies, IMovie} from '../api';
import styled from 'styled-components';
import { makeImagePath } from '../Utils';
const Wrapper = styled.div`
    background-color:black;
   
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
function Home() {
    const {data,isLoading} = useQuery<IMovie>(['movies','nowPlaying'],getMovies);
       console.log(data,data?.title);
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
    </>
    )}</Wrapper>
}

export default Home;