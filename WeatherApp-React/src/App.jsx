import React, {useEffect, useState} from "react";
import {Dimmer, Loader} from "semantic-ui-react";
import './App.css'

import WeatherCard from "./components/organisms/WeatherCard.jsx";
import LocationButtonList from "./components/molecules/LocationButtonList.jsx";
import WeatherPage from "./components/pages/WeatherPage.jsx";


function App() {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [data, setData] = useState({});
    const [weatherRecovered, setWeatherRecovered] = useState(false);
    const locationList = [
        {
            "location": "Bordeaux",
            "lat": 44.8333,
            "long": -0.5667,
            "id": "3031582",
        },
        {
            "location": "Paris",
            "lat": 48.8534,
            "long": 2.3488,
            "id": "2988507",
        },
        {
            "location": "London",
            "lat": 51.5085,
            "long": -0.1257,
            "id": "2643743",
        }
    ];

    const GetWeatherByLocation = async (location) => {
        console.log("====================================");
        console.log("GetWeatherByLocation")
        console.log(location);
        const lat = location.lat;
        const long = location.long;

        const request = `${import.meta.env.VITE_REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`;
        console.log(request);
        const response = await fetch(request);
        const json = await response.json();// convert fetch response to json
        setData(json);
        // setWeatherRecovered(true);
        console.log("Weather data recovered");
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                const tempLocation = { "lat": position.coords.latitude, "long": position.coords.longitude };

                if (lat !== null && long !== null && !weatherRecovered) {
                    console.log("temporary location :" + tempLocation.lat + " " + tempLocation.long);

                    await GetWeatherByLocation(tempLocation);
                }
            },
            function(error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            });

    }, [lat, long]);

    useEffect(() => {
        if (data === undefined) return;
        else {
            // console.log(data)
        }
    }, [data]);
    
    return lat === null && long === null && weatherRecovered ? (
        <div className="App">
            <Dimmer active>
                <Loader>Loading weather data...</Loader>
            </Dimmer>
        </div>
    ) :  (
        <div className="App">
            {(typeof data.main != 'undefined') ? (
                <WeatherPage locationList={locationList} clickFunction={GetWeatherByLocation} data={data}/>
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
