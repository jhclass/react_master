import React,{useEffect, useState} from "react";
import {useQuery} from 'react-query';
import styled from "styled-components";
import {Link} from "react-router-dom";
import $ from "jquery";
import { fetchCoins } from "../api";

const Container = styled.div`
padding:20px 20px;
max-width:480px;
min-width:480px;
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
color:#038aff;
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
 font-family: 'Source Code Pro', monospace;
 color:${props=>props.theme.bgColor};
 font-size:26px;
 font-weight:bold;
 span{
    color:#038aff;
 }
 `;
 const Loader = styled.div`
 text-align:center;
 color:${props=>props.theme.bgColor};
 font-size:30px;
 padding-top:20px;
 `;

 const ImgCoin = styled.img`
  display:inline-block;
  width:25px;
  height:25px;
  vertical-align:middle;
  margin-right:15px;
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
    const {data,isLoading} = useQuery<CoinInterface[]>("allCoins", fetchCoins);
    // const [Coins,setCoins] = useState<CoinInterface[]>([]);
    // const [loading,setLoading] = useState(true);
  
    // useEffect(()=>{
    //     (async()=>{
    //         const response = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const json = await response.json();
    //         console.log(json);//제대로 가져오고 있는지?
    //         setCoins(json.slice(0,100)); // 100개만 가져오자
    //         console.log(Coins,'오노'); // 100개 전달 완료
    //         setLoading(false);
    //         //jQuery 적용한번 해봄 :)
    //         // $('.oncBtn').on('click',function(){
    //         //     alert('a');
    //         // })
    //     })();
        
    // },[]);
    return(
        <Container>
            <Header><Title>What is your <span>coin?</span></Title></Header>
            {isLoading ? (<Loader>Loading...</Loader>) : (<CoinsList>
                {data?.slice(0,100).map((coin)=>
                <Coin key={coin.id} className="oncBtn">
                    <ImgCoin src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
                    <Link to={{
                        pathname:`/${coin.id}/chart`,
                        state: {name:coin.name}
                    }}>{coin.name} &rarr;</Link>
                </Coin>
                )}
            </CoinsList>)}
        </Container>

    );
}

export default Coins;