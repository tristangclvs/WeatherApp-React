import React from "react";
import './WeatherPage.css'
import WeatherCard from "../organisms/WeatherCard.jsx";
import LocationButtonList from "../molecules/LocationButtonList.jsx";

const WeatherPage = ({locationList, clickFunction, data}) => {
    return (
        <div className="app-main-container">
            <div className="aside">
                <LocationButtonList locationList={locationList} clickFunction={clickFunction} />
            </div>
            <div className="information-container">
                <WeatherCard weatherData={data}/>
            </div>
        </div>
    );
}

export default WeatherPage;