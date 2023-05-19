import React from "react";
import './LocationButtonList.css'
import LocationButton from "./LocationButton";

const LocationButtonList = ({locationList, clickFunction}) => {
    return (
        <>
            {locationList.map((location) => (
                <LocationButton clickFunction={clickFunction} location={location} key={location.id}></LocationButton>
            ))}
        </>
    );
}

export default LocationButtonList;