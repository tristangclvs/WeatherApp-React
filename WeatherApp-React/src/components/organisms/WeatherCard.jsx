import React from 'react';
import './WeatherCard.css'
import { Button } from 'semantic-ui-react'
import moment from 'moment';
import {BsSunrise, BsSunset, BsClouds, BsCloudRain, BsCloudSnow, BsCloudFog} from 'react-icons/bs';
import {TiWeatherSunny} from 'react-icons/ti';
import { IconContext } from "react-icons";

const WeatherCard = ({weatherData}) => {
    // CONSTANTS
    const fontColor = (weatherData.main.temp < 3) ? '#00fff7' : (weatherData.main.temp < 15) ? 'whitesmoke' : 'orange';
    const weatherDescription = weatherData.weather[0].main;
    const weatherIcon = (weatherDescription == 'Clear') ?
        <TiWeatherSunny /> :
        (weatherDescription === 'Clouds') ?
            <BsClouds /> :
            (weatherDescription === 'Rain') ?
                <BsCloudRain /> :
                (weatherDescription === 'Snow') ?
                    <BsCloudSnow /> :
                    <BsCloudFog />;

    const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString().split(":").splice(0,2).join("h");
    const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().split(":").splice(0,2).join("h");
    // FUNCTIONS
    const refresh = () => {
        window.location.reload();
    }

    // RENDER
    return (
        <div className="main">

            <div className="top">
                <p className="header">{weatherData.name}</p>
                <Button className="button" inverted color='blue' onClick={refresh} circular icon='refresh' />
            </div>
            <div className="flex">
                <p className="day">Day: {moment().format('dddd')}, {moment().format('LL')}</p>
                <p className="description">
                    <IconContext.Provider value={{ size: 20 }}>
                        {weatherIcon}
                    </IconContext.Provider>
                    &nbsp; {weatherDescription}</p>
            </div>
            <div className="flex">
                <p className="temp">Temperature: <span style={{color: fontColor}}>{weatherData.main.temp} &deg;C</span></p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>
            <div className="flex">
                <p className="sunrise-sunset">
                    <IconContext.Provider value={{ size: 20 }}>
                        <BsSunrise />
                    </IconContext.Provider>
                        &nbsp; Sunrise: {sunrise} </p>
                <p className="sunrise-sunset">
                    <IconContext.Provider value={{ size: 20 }}>
                        <BsSunset />
                    </IconContext.Provider>
                    &nbsp; Sunset: {sunset}</p>
            </div>
        </div>
    );
}

export default WeatherCard;
