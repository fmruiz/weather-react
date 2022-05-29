import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import {
    WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain,
} from 'react-icons/wi';
import { IconContext } from 'react-icons';

const StateByName = {
    Cloud: WiCloud,
    Cloudy: WiDayCloudy,
    Fog: WiDayFog,
    Sunny: WiDaySunny,
    Rain: WiRain,
};

const renderState = (state) => {
    switch (state) {
        case 'cloud':
            return <StateByName.Cloud />;
        case 'cloudy':
            return <StateByName.Cloudy />;
        case 'fog':
            return <StateByName.Fog />;
        case 'sunny':
            return <StateByName.Sunny />;
        case 'rain':
            return <StateByName.Rain />;
        default:
            return <StateByName.Sunny />;
    }
};

const Weather = ({ temperature, state }) => {
    return (
        <>
            <IconContext.Provider value={{ size: '3em' }}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography display={'inline'} variant="h3" data-testid="heading">
                {temperature}
            </Typography>
        </>
    );
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired
};

export default Weather;
