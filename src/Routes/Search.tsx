import { react } from "@babel/types";
import { useLocation } from "react-router";
import {useQuery} from 'react-query';
import {getSearchData, ISearchList} from '../api'
function Search() {
    
    const location = useLocation();
    console.log(location);
    const search = new URLSearchParams(location.search);
    const keyword = search.get("keyword");
    console.log('키워드만',keyword);
    const {data,isLoading} = useQuery<ISearchList>(['searchData','nowLoading'],()=>getSearchData(`${keyword}`)); 
    console.log(data);
    return null;
}
export default Search; 