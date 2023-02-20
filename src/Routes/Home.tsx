import {useQuery} from 'react-query';
import {getMovies, IMovie} from '../api'
function Home() {
    const {data,isLoading} = useQuery<IMovie>(['movies','nowPlaying'],getMovies);
    console.log(data,isLoading);
    return <div style={{backgroundColor:"#000", height:"200vh"}}></div>
}

export default Home;