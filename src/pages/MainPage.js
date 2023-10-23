import { useState } from "react";
import Button from '@mui/material/Button';
import axios from 'axios';
import ResultsPage from "./ResultsPage";

const MainPage = () =>
{
    const [error, setError] = useState('');
    const [sensorID,setSensorID] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [results,setResults] = useState('');

    const search = async() => {
        try{

            setError('');
            setResults(null);
  
            const headers = "-H Basic dXNlcjpwYXNzd29yZA==";
    

            var url = "/sensordata/findbynameanddatebetween?name=" + sensorID + "&startdate=" + startDate + "&enddate=" + endDate;
          
            const response = await axios.get(url,{headers});
  
            setResults(response.data);
       }
        catch (e) {
            setError(e.message);
        }   
    }
    return (
        <div id="page-body">
            <>
            <h3>Search</h3>
            {error && <p className="error">{error}</p>}

            
            <input
                placeholder="Sensor ID"
                value = {sensorID}
                onChange={e => setSensorID(e.target.value)} />
            <input 
                placeholder="Start Date"
                value={startDate}
                onChange={(e => setStartDate(e.target.value))}/>
            <input 
                placeholder="End Date"
                value={endDate}
                onChange={(e => setEndDate(e.target.value))}/>
            <Button variant="contained" onClick={search}>Search</Button>
        
            
               <h2>Results</h2>
               
                {results ? (
                     <ResultsPage rows={results.SensorData}/>  )
                     : null}         
                      
            </> 
        </div>   
    )
};

export default MainPage;