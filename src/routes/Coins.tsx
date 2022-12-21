import React,{useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Container = styled.div`
padding:20px 20px;
max-width:480px;
margin:0 auto;
`;
const Header = styled.header`
    height: 10vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const CoinsList = styled.ul`
padding-top:20px;
`;
const Coin = styled.li`
background-color:white;
color:${props => props.theme.textColor};
margin-bottom:10px;
padding:20px;
border-radius:15px;
a {
    transition : color .2s ease-in;
}
&:hover {
    a {
        color:tomato}
    }
}
`;


const Title = styled.h1`
 color:${props=>props.theme.bgColor};
 font-size:48px;
 `;
 const Loader = styled.div`
 text-align:center;
 color:${props=>props.theme.bgColor};
 font-size:30px;
 padding-top:20px;
 `;




interface CoinInterface {
    id:string,
    name:string,
    symbol:string,
    rank:number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins(){
    const [Coins,setCoins] = useState<CoinInterface[]>([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        (async()=>{
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            console.log(json);//제대로 가져오고 있는지?
            setCoins(json.slice(0,100)); // 100개만 가져오자
            console.log(Coins,'오노'); // 100개 전달 완료
            setLoading(false);
        })();
        
    },[]);
    return(
        <Container>
            <Header><Title>COIN's</Title></Header>
            {loading ? (<Loader>Loading...</Loader>) : (<CoinsList>
                {Coins.map((coin)=>
                <Coin key={coin.id}>
                    <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                </Coin>
                )}
            </CoinsList>)}
        </Container>

    );
}

export default Coins;