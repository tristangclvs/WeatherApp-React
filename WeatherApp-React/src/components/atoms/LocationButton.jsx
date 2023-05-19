import React from "react";
import './LocationButton.css';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

const LocationButton = ({location,clickFunction}) => {
    console.log(location)
    const clickHandler = (location) => {
        console.log("clickHandler: " );
        console.log(location);
        clickFunction(location);
    }
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <Button variant="contained" className="location-button" onClick={() => clickHandler(location)}>
                <span className="location-button-text">{location.location}</span>
            </Button>
        </Box>
    );
}

export default LocationButton;