import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from 'react-apexcharts';
 

interface IHistorical {
   
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap:number;
    time_open: number;
    time_close: number;
}
interface ChartProps {
    coinId:string;
}

function Chart({coinId}:ChartProps) {
    const {isLoading,data:dadada} = useQuery<IHistorical[]>(["ohlcv",coinId],()=>fetchCoinHistory(coinId));
    //console.log(data);
    let highChart:any=dadada?.map(v=>(v.high));
    let lowChart:any=dadada?.map(v=>(v.low));
    let closeChart:any=dadada?.map(v=>(v.time_close));
    //console.log(JSON.parse(dataChart),'a');
    return (
        <div>{ isLoading ? "Loading Charts...":  
        <ApexChart 
        type="line" 
        series={[
            {
              name:"high",
              data:highChart,
            }, // 이 형식이 number
            {
                name:"Low",
                data:lowChart,
              }, // 이 형식이 number
        ]}
        options={{
            theme : {
                mode:"dark",
            },
            chart:{
               background:"transparent",
               toolbar:{
                show:false,
               },
              
            },
            stroke: {
                curve:"smooth",
                width:5,
            },
            grid:{
                show:true,
            },
            yaxis:{show:false},
            xaxis:{
                labels:{show:false},
                type:"datetime",
                axisBorder:{show:false},
                categories: closeChart,
              
                
            },
            fill: {type:"gradient",gradient:{gradientToColors:["#0be881","#0fbcf9"],stops:[0,100]}},
            colors:["#0fbcf9","#0be881"],
            tooltip: {
                y: {formatter:(value)=>`$${value.toFixed(1)}`},

            }
         
            
        }}
        /> }</div>
    );
}
export default Chart;