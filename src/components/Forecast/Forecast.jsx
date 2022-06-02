import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import ForecastItem from '../ForecastItem';

const renderForecastItem = (forecastItem) => {
    return (
        <Grid 
            data-testid='forecast-item-container' 
            item key={`${forecastItem.weekDay}${forecastItem.hour}`}
        >
            <ForecastItem
                hour={forecastItem.hour}
                weekDay={forecastItem.weekDay}
                temperature={forecastItem.temperature}
                state={forecastItem.state}
            />
        </Grid>
    );
};

const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container justifyItems={'center'} alignItems={'center'}>
            {forecastItemList.map((forecastItem) =>
                renderForecastItem(forecastItem)
            )}
        </Grid>
    );
};

Forecast.propTypes = {
    forecastItemList: PropTypes.array.isRequired,
};

export default Forecast;
