import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Weather = ({ temperature }) => {
    return (
        <>
            <Typography variant="h2" data-testid="heading">{temperature}</Typography>
        </>
    );
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
};

export default Weather;
