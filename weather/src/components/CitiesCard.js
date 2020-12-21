import React from 'react';
import './citiesCard.css';

function CitiesCard(props){
    // const {data} = props;
    const data = {"coord":{"lon":77.6,"lat":12.98},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":294.89,"feels_like":294.9,"temp_min":293.15,"temp_max":296.15,"pressure":1016,"humidity":64},"visibility":6000,"wind":{"speed":2.1,"deg":70},"clouds":{"all":40},"dt":1608473372,"sys":{"type":1,"id":9205,"country":"IN","sunrise":1608426387,"sunset":1608467283},"timezone":19800,"id":1277333,"name":"Bengaluru","cod":200};
    const iconUrl = 'http://openweathermap.org/img/wn/' + data.weather[0].icon+ '.png';
    return (
        <div className = 'card' >
            <div className = 'cityName'>{data.name}</div>
            <div className = 'dateTime'>
                <div className = 'date'>{new Date().toLocaleString('default', { month: 'long' })}</div>
                <div className = 'date'>{new Date().getDate()} ,</div>
                <div className= 'date'>{new Date().toLocaleTimeString()}</div>
            </div>
            <img className ='icon' src = {iconUrl} alt = 'weather'/>
            <h1 className = 'weather'>{Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>
            </h1>
            <div className = "weather">{data.weather[0].main}</div>
        </div>
    )
}

export default CitiesCard;