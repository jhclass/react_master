const API_KEY = "fdb92a7a5d8f09c641fc070433aaa9b1";
const BASE_PATH = "https://api.themoviedb.org/3";
const ID = "490";
export interface IMovie {
    id:number,
    backdrop_path:string,
    poster_path:string,
    title:string,
    overview:string,
}
interface IMoveListResult {
    id:number,
    title:string,
    poster_path:string,
    item_count:number,
    overview:string,
    backdrop_path:string,
    
}
interface IImagesPath{
    id:number,
    file_path:string,
    title:string,
    
}
export interface IImages {
    posters:IImagesPath[],
    backdrops:IImagesPath[]
}
export interface IMovieList {
    results:IMoveListResult[],
}

export interface ISearch {
    adult:boolean,
    id:number,
    overview:string,
    media_type:string,
    vote_average:number,
    vote_count:number,
    
}
export interface ISearchList {
    results:ISearch[];
}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/${ID}?api_key=${API_KEY}`)
    .then((res)=> {return res.json()})
}


// export function getMoviesList() {
//     return fetch(`${BASE_PATH}/movie/490/lists?api_key=${API_KEY}&page=1`)
//     .then((res)=> {return res.json()})
// }
//변환해보자
export const getMoviesList = async()=>{
  const res = await fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&page=1`)
  const json = await res.json();
  return json;
}

export const getMovieImages = async()=>{
    const res = await fetch(`${BASE_PATH}/movie/${ID}/images?api_key=${API_KEY}`)
    const json = await res.json();
    return json;
}

export const getSearchData = async(searchData:string)=>{
    //https://api.themoviedb.org/3/search/multi?api_key=fdb92a7a5d8f09c641fc070433aaa9b1&query=dune&language=en-US&page=1&include_adult=false
    const res = await fetch(`${BASE_PATH}/search/multi?api_key=${API_KEY}&query=${searchData}&page=1&include_adult=false`)
    const json = await res.json();
    return json;
  }





