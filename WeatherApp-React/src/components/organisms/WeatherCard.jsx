import React from 'react';
import './WeatherCard.css'
import { Button } from 'semantic-ui-react'
import moment from 'moment';

const WeatherCard = ({weatherData}) => {
    const refresh = () => {
        window.location.reload();
    }
    const fontColor = (weatherData.main.temp < 3) ? '#00fff7' : (weatherData.main.temp < 15) ? 'whitesmoke' : 'orange';
    const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString().split(":").splice(0,2).join("h");
    const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().split(":").splice(0,2).join("h");
    return (
        <div className="main">
            <div className="top">
                <p className="header">{weatherData.name}</p>
                <Button className="button" inverted color='blue' onClick={refresh} circular icon='refresh' />
            </div>
            <div className="flex">
                <p className="day">Day: {moment().format('dddd')}, {moment().format('LL')}</p>
                <p className="description">{weatherData.weather[0].main}</p>
            </div>
            <div className="flex">
                <p className="temp">Temperature: <span style={{color: fontColor}}>{weatherData.main.temp} &deg;C</span></p>
                <p className="temp">Humidity: {weatherData.main.humidity} &deg;C</p>
            </div>
            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {sunrise} </p>
                <p className="sunrise-sunset">Sunset: {sunset}</p>
            </div>
        </div>
    );
}

export default WeatherCard;
