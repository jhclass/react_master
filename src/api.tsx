export function fetchCoins(){
    // const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
    // //console.log(infoData);
    // const priceData = await(await fetch(`https://api.coinpaprika.com/v1/ticker/${coinId}`)).json();
    // //console.log(priceData);    
    //리액트와 중괄호... 욕이 나옵니다.
   return fetch(`https://api.coinpaprika.com/v1/coins`).then((res)=>
    res.json()
    );
}