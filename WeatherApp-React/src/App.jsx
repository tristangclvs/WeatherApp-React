import React, {useEffect, useState} from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherCard from "./components/WeatherCard.jsx";
import {Dimmer, Loader} from "semantic-ui-react";

function App() {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [data, setData] = useState({});
    const [weatherRecovered, setWeatherRecovered] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            if (lat !== null && long !== null && !weatherRecovered) {
                GetWeather();
            }
        },
            function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
        });

    }, [lat, long]);

    useEffect(() => {
        if (data === undefined) return;
        else {
            console.log(data)
        }
    }, [data]);


    const GetWeather = async () => {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`)
        const json = await response.json();// convert fetch response to json
        setData(json);
        setWeatherRecovered(true);
        console.log("Weather data recovered");
    }

    return lat === null && long === null && weatherRecovered ? (
        <div className="App">
            <Dimmer active>
                <Loader>Loading weather data...</Loader>
            </Dimmer>
        </div>
    ) :  (
        <div className="App">
            {(typeof data.main != 'undefined') ? (
                <WeatherCard weatherData={data}/>
            ): (
                <div>
                    <Dimmer active>
                        <Loader>Loading weather data...</Loader>
                    </Dimmer>
                </div>
            )}
        </div>
    )
}

export default App;
