import { useLocation } from "react-router";
function Search() {
    
    const location = useLocation();
    console.log(location);
    const search = new URLSearchParams(location.search);
    const keyword = search.get("keyword");
    console.log('키워드만',keyword);
    return null;
}
export default Search; 