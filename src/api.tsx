const BASE_URL=`https://api.coinpaprika.com/v1`;

export function fetchCoins(){
    // const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
    // //console.log(infoData);
    // const priceData = await(await fetch(`https://api.coinpaprika.com/v1/ticker/${coinId}`)).json();
    // //console.log(priceData);    
    //리액트와 중괄호... 욕이 나옵니다.
   return fetch(`${BASE_URL}/coins`).then((res)=>
    res.json()
    );
}

export function fetchCoinInfo(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}`).then((res)=>
    res.json()
    );
}

export function fetchCoinTickers(coinId:string){
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((res)=>
    res.json()
    );
}