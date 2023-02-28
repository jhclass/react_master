import { react } from "@babel/types";
import { useLocation } from "react-router";
import {useQuery} from 'react-query';
import {getSearchData, ISearchList} from '../api';
import styled from "styled-components";

const SearchWrap = styled.div`
padding-top:100px;
    h2 {text-align:center;}
    font-size:24px;
    font-weight:bold;
`;
const TextRedColor = styled.span`
    color:${props=>props.theme.red}
`;

function Search() {
    
    const location = useLocation();
    console.log(location);
    const search = new URLSearchParams(location.search);
    const keyword = search.get("keyword");
    console.log('키워드만',keyword);
    const {data,isLoading} = useQuery<ISearchList>(['searchData','nowLoading'],()=>getSearchData(`${keyword}`)); 
    console.log(data);
    return (
        <SearchWrap >
            <h2><TextRedColor>{keyword}</TextRedColor> 에 대한 검색결과가 <TextRedColor>{data?.results.length}</TextRedColor> 건 조회되었습니다.</h2>
            <div>
                <h3>Movie</h3> 
            </div>
            <div>
                <h3>TV</h3> 
            </div>
            <div>
                <h3>Person</h3> 
            </div>
        </SearchWrap>

    );
}
export default Search; 