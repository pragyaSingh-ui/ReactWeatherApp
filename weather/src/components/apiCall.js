import React from 'react';
import CitiesCard from './CitiesCard';

function CityData(props){
    
    // const [weather, setWeather] = useState([]);
    const APIKEY = 'eec80305f99a1e51b545d2b0b28fa3e7';
    const api = 'https://api.openweathermap.org/data/2.5/weather?q='+props.cityName+'&appid='+APIKEY;

async function weatherData(){
     return await fetch(api).then(res => res.json());

    //setWeather({data:data});
}
const data = weatherData();

if(data !== undefined){
    return (
        <CitiesCard data = {data}></CitiesCard>
    )
}else{
    return <div></div>
}
}

export default CityData;