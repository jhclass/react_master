const API_KEY = "fdb92a7a5d8f09c641fc070433aaa9b1";
const BASE_PATH = "https://api.themoviedb.org/3";




export interface IMovie {
    id:number,
    backdrop_path:string,
    poster_path:string,
    title:string,
    overview:string,


}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/490?api_key=${API_KEY}`)
    .then((res)=> {return res.json()})
}