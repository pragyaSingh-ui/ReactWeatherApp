import React from 'react';
import './citiesCard.css';

function CitiesCard(props){
    const {data} = props;
    return (
        <div className = 'card'>
            <div className = 'cityName'>{data.name}</div>
            <div className = 'dateTime'>
                <div className = 'date'>date</div>
                <div className= 'date'>time</div>
            </div>
            <div>log</div>
            <div>temp</div>
        </div>
    )
}

export default CitiesCard;