import {useLocation, useParams} from "react-router";
import React,{useEffect, useState} from 'react';
import styled from "styled-components";
interface Params{
    coinId:string;
}
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
 interface RouteState{
   name:string;

 }
function Coin(){

    const {coinId} = useParams<Params>();
    //console.log(params);
    const [loading,setLoading] = useState(true);
    const {state} = useLocation<RouteState>();
    //console.log(state.name); // 어떤 정보가 전달이 되었나 확인해보자

    useEffect(()=>{
       (
        async()=>{
            //캡슐화
            const coinData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            console.log(coinData);
                
            }
        )(); //바로실행가능한 함수! ()

    },[]);
    return(
        <Container>
            <Header><Title>{state?.name || "Loading"}</Title></Header>
            {loading ? (<Loader>Loading...</Loader>) : null }
        </Container>
    );
}

export default Coin;