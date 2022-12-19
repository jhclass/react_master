import {useParams} from "react-router";
interface Params{
    coinId:string;
}
function Coin(){
    const {coinId} = useParams<Params>();
    //console.log(params);
    return(
        <h1></h1>
    );
}

export default Coin;