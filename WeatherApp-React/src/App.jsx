import React, {useEffect, useState} from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
        if (data === undefined)return;
        else {
            console.log(data.name)
        }
    }, [data]);

    const GetWeather = async () => {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`)
        const json = await response.json();// convert fetch response to json
        setData(json);
        setWeatherRecovered(true);
    }

    return lat === null && long === null ? (
        <div className="App">
            <h1>Loading latitude and longitude...</h1>
        </div>
    ) :  (
        <div className="App">
            <p>Latitude is {lat}</p>
            <p>Longitude is {long}</p>
            <h1>Weather App</h1>
            <h2>Weather in your location</h2>
            <h3>{data.name}</h3>

        </div>
    )
}

export default App;
