import {useLocation,useParams} from "react-router";
import React,{useEffect, useState} from 'react';
import styled from "styled-components";

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
 }

function Coin(){

    const {coinId} = useParams<Params>();
    //console.log(params);
    const [loading,setLoading] = useState(true);
    const {state} = useLocation<RouteState>();
    //console.log(state.name); // 어떤 정보가 전달이 되었나 확인해보자
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState<PriceData>();
    useEffect(()=>{
       (
        async()=>{
         //캡슐화
        const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
        console.log(infoData);
        const priceData = await(await fetch(`https://api.coinpaprika.com/v1/ticker/${coinId}`)).json();
        console.log(priceData);    
        setInfo(infoData);
           setPriceInfo(priceData);
           setLoading(false);
        }
            
        )(); //바로실행가능한 함수! ()

    },[]);

    return(
        <Container>
            <Header><Title>{state?.name || "Loading"}</Title></Header>
            {loading ? (<Loader>Loading...</Loader>) :  priceInfo?.price_btc}
        </Container>
    );
}

export default Coin;