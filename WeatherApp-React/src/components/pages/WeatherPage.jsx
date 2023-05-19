import React, {useEffect, useState} from "react";
import './WeatherPage.css'
import WeatherCard from "../organisms/WeatherCard.jsx";
import LocationButtonList from "../molecules/LocationButtonList.jsx";
import {Dimmer, Loader} from "semantic-ui-react";
const WeatherPage = () => {
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

        const lat = location.lat;
        const long = location.long;

        const request = `${import.meta.env.VITE_REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`;
        const response = await fetch(request);
        const json = await response.json();// convert fetch response to json
        setData(json);
        setWeatherRecovered(true);
        console.log("Weather data recovered");
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                const tempLocation = { "lat": position.coords.latitude, "long": position.coords.longitude };

                if (lat !== null && long !== null && !weatherRecovered) {
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
        <div >
            <Dimmer active>
                <Loader>Loading weather data...</Loader>
            </Dimmer>
        </div>
    ) :  (
        <div className="page-container">
            {(typeof data.main != 'undefined') ? (
                <div className="app-main-container">
                    <div className="aside">
                        <LocationButtonList locationList={locationList} clickFunction={GetWeatherByLocation} />
                    </div>
                    <div className="information-container">
                        <WeatherCard weatherData={data}/>
                    </div>
                </div>
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

export default WeatherPage;