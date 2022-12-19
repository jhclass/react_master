import {useParams} from "react-router";
interface Params{
    coinId:string;
}
function Coin(){
    const {coinId} = useParams<Params>();
    //console.log(params);
    return(
        <h1>Coin:{coinId}</h1>
    );
}

export default Coin;