import { useState } from "react";
import Button from '@mui/material/Button';
import axios from 'axios';
import ResultsPage from "./ResultsPage";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from 'react';
import dayjs from 'dayjs';

const MainPage = () =>
{
    const [error, setError] = useState('');
    const [sensorID,setSensorID] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [results,setResults] = useState('');
    const [locale, setLocale] = React.useState('en_GB');

    const search = async() => {
        try{

            setError('');
            setResults(null);
  
            const headers = "-H Basic dXNlcjpwYXNzd29yZA==";
    
            var convertStartDate = dayjs(startDate).format('YYYY-MM-DD hh:mm:ss');
            var convertEndDate = dayjs(endDate).format('YYYY-MM-DD hh:mm:ss');
    
            var url = "/sensordata/findbynameanddatebetween?name=" + sensorID + "&startdate=" + convertStartDate + "&enddate=" + convertEndDate;

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

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    >
        <TextField
        id="outlined-controlled"
        label="Sensor ID"
        value={sensorID}
        defaultValue={''}
        onChange={(event) => {
          setSensorID(event.target.value);
        }}
      />
               <br></br>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                <DateTimePicker
                  label="Start Date"
                  format="YYYY-MM-DD hh:mm:ss"
                  locale={locale}
                  value={startDate}
                  onChange={(newStartDate) => setStartDate(newStartDate)}
                  />
                  
                  
                    <DateTimePicker
                  label="End Date"
                  format="YYYY-MM-DD hh:mm:ss"
                  locale={locale}
                  value={endDate}
                  onChange={(newEndDate) => setEndDate(newEndDate)}
                  />
    
            </LocalizationProvider>
           
            <br></br>
            <Button variant="contained" onClick={search}
            style={{width:10}}>Search</Button>
            
           </Box>
           
   
               
                {results ? (
                    
                     <ResultsPage rows={results.SensorData}/>  )
                     : null}         
                     
            </> 


        </div>   
    )
};

export default MainPage;