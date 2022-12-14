import {Switch, Route, useLocation, useParams, useRouteMatch} from "react-router";
import {Link} from "react-router-dom";
import React,{useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import Chart from "./Chart";
import Price from "./Price";
import { Helmet } from "react-helmet";
import { info } from "console";

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
const Title = styled.h1`
 font-family: Source Code Pro
 monospace;
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

const Cbox = styled.div`
max-width:480px;
padding:20px 0;
display:flex;
justify-content:center;
align-items:center;
background-color:${props=>props.theme.bgColor};
border-radius:20px;   
margin-top:20px;
cursor:pointer;
    
    &:nth-of-type(1){margin-top:0;}
    &:hover {background-color: #7393B3; box-shadow: 1px 1px 1px rgba(0,0,0,0.3),1px 1px 1px rgba(0,0,0,0.3) inset;}
    div {
    background:${props=>props.theme.accentColor};
    padding:20px 30px;
    margin-left:20px;
    text-align:center;
    border-radius:20px;
    color:${props=>props.theme.bgColor};
    }
    div:first-child {margin-left:0px;}
    div:nth-child(3){background-color:transparent;}

    div > span {display:block;margin-bottom:20px; font-size:20px; font-weight:bold;}
    div > span:last-child {margin:0;}
    div > span > img {width:50px;}
`;
 
const ParagraphBox = styled.p`
color:${props=>props.theme.textColor};
font-size:18px;
line-height:1.5;
text-align:left;
padding:0px 20px;
&:hover {
    text-shadow:1px 1px 1px rgba(0,0,0,0.1);
    color:#fff !important;
}
    span {display:block;}
    span:nth-child(1) {font-size:20px; font-weight:bold; margin-bottom:20px;}
`;

const TabContainer = styled.div`
text-align:center;
padding-bottom:20px;
`;

const Tab = styled.span<{ isActive:boolean }>`
display:inline-block;
margin-right:20px;
font-size:18px;
    a {color:${props=>props.theme.accentColor}; font-weight:bold; border-radius:10px; padding:10px 30px; display:block;margin-top:20px;background-color:${props =>props.isActive ? props.theme.btnColor : props.theme.darkColor}}
`;

interface Params{
coinId:string;
}

interface RouteState{
name:string;
}
 
interface InfoData {
id: string; //0
name: string;
symbol: string;
rank: number;
is_new: boolean;
is_active: boolean;
type: string;//6
logo: string;
tags: object; //8
team: object; //9
description: string; //10
message: object; //11
open_source: boolean; //12
started_at: string; //13
development_status: string; //14
hardware_wallet: boolean;//15
proof_type: string; //16
org_structure: string; //17
hash_algorithm: string; //18
links: object; //19
links_extended: object; //20
whitepaper: object;
first_data_at: string;
last_data_at: string;

}
 
 
interface PriceData {

id : string; //1
name : string;
symbol : string;
rank : string;
price_usd : string;
price_btc : string;
volume_24h_usd : string;
market_cap_usd : string;
circulating_supply : string;
total_supply : string;
max_supply : string;
percent_change_1h : string;
percent_change_24h : string;
percent_change_7d : string;
last_updated : string;
quotes: {
 USD: {
    price:number;
 }
}

}



function Coin(){
    
    const {coinId} = useParams<Params>();
    //console.log(params);
    const [priceInfo, setPriceInfo] = useState<PriceData>();
    const priceMatch = useRouteMatch(`/${coinId}/price`);
    const chartMatch = useRouteMatch(`/${coinId}/chart`);
    const {isLoading:infoLoading,data:infoData} = useQuery<InfoData>(["infoData",coinId],()=>fetchCoinInfo(coinId));
    const {isLoading:tickersLoading,data:tickersData} = useQuery<PriceData>(["priceData",coinId],()=>fetchCoinTickers(coinId),{
        refetchInterval:10000, //5??? ?????? refetching! 
    });
    // const [loading,setLoading] = useState(true);
     const {state} = useLocation<RouteState>();
    // //console.log(state.name); // ?????? ????????? ????????? ????????? ???????????????
    // const [info, setInfo] = useState<InfoData>();
    // console.log(priceMatch);
    // useEffect(()=>{
    //    (
    //     async()=>{
    //      //?????????
    //     const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
    //     console.log(infoData);
    //     const priceData = await(await fetch(`https://api.coinpaprika.com/v1/ticker/${coinId}`)).json();
    //     console.log(priceData);    
    //     setInfo(infoData);
    //        setPriceInfo(priceData);
    //        setLoading(false);                           
    //     }
            
    //     )(); //????????????????????? ??????! ()

    // },[coinId]);
    const loading = infoLoading || tickersLoading;
    return(
        <Container>
            <Helmet><title>{state?.name || infoData?.name}</title></Helmet>
            <Header><Title>{state?.name || infoData?.name}</Title></Header>
            {loading ? (<Loader>Loading...</Loader>) : 
            <>
                <Cbox>
                    <div><span>RANK</span><span>{tickersData?.rank}</span></div>
                    <div><span>SYMBOL</span><span>{tickersData?.symbol}</span></div>
                    <div><span><img src={infoData?.logo}/></span></div>
                </Cbox>
                <Cbox>
                    <ParagraphBox>
                        <span>Description</span>
                        
                        <span>{infoData?.description}</span>
                    </ParagraphBox>
              
                </Cbox>
                <Cbox>
                    <div><span>Total Supply</span><span>{tickersData?.total_supply}</span></div>
                    <div><span>Price</span><span>${tickersData?.quotes.USD.price.toFixed(4)}</span></div>
                </Cbox>
                <TabContainer>
                    <Tab isActive={ chartMatch !== null }><Link to={`/${coinId}/chart`}>Chart</Link></Tab>
                    <Tab isActive={ priceMatch !== null }><Link to={`/${coinId}/price`}>Price</Link></Tab>
                </TabContainer>
                
                
                
                <Switch>
                    <Route path={`/${coinId}/price`}><Price/></Route>
                    <Route path={`/${coinId}/chart`}><Chart coinId={coinId}/></Route>
                </Switch>
             
            </>
            }
        </Container>
    );
}

export default Coin;