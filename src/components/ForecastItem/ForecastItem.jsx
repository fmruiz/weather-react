import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { IconContext } from 'react-icons';
import IconState, { validValues } from '../IconState';

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
    return (
        <Grid
            container
            direction={'column'}
            justifyItems={'center'}
            alignItems={'center'}
        >
            <Grid item>
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography>{hour}</Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={{ size: '3em' }}>
                    <IconState state={state} />
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography>{temperature}</Typography>
            </Grid>
        </Grid>
    );
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
};

export default ForecastItem;
