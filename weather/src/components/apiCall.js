import React, { useState } from 'react';
import CitiesCard from './CitiesCard';

function CityData(props){
    
    const [weather, setWeather] = useState([]);
    const APIKEY = '89c63e7e9ccf2765eae23696a3415e4a';
    const api = 'https://api.openweathermap.org/data/2.5/weather?q='+props.cityName+'&appid='+APIKEY;

async function weatherData(){
    const data = await fetch(api).then(res => res.json()).then((data) =>data);

    setWeather({data:data});
}
weatherData();
if(weather.data !== undefined){
    return (
        <CitiesCard data = {weather.data}></CitiesCard>
    )
}else{
    return <div></div>
}
}

export default CityData;