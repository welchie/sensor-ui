import React, {useState} from "react";
import { ChartContainer, BarPlot, BarChart, LineChart } from '@mui/x-charts';

const ChartsPage = ({data}) => {

 
    const [graphDataC,setGraphDataC] = useState([]);
    const [graphDataF,setGraphDataF] = useState([]);
    const [dates,setDates] = useState([]);
  
     const loadData = () => {
         for(var i=0; i < data.length; i++){
             graphDataC.push(data[i].tempC);
             graphDataF.push(data[i].tempF);
             dates.push(data[i].date);
            
         }
     };

     
    return (
      <>
      {loadData()}
      
      <BarChart
      width={800}
      height={500}
    
      series={[
        { data: graphDataC, label: 'Celcius', id: 'tempC' },
        { data: graphDataF, label: 'Farenheit', id: 'tempF' },
      ]}

      xAxis={[{ data: dates, scaleType: 'band' , }]}
    />

<LineChart
  width={800}
  height={300}
  series={[
    { data: graphDataC, label: 'Celcius' },
    { data: graphDataF, label: 'Farenheit' },
  ]}
  xAxis={[{ scaleType: 'point', data: dates }]}
/>
   
      </>
    )
     }
    
      

export default ChartsPage;