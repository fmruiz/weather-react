import React from 'react';
import Forecast from './Forecast';

export default {
    title: 'Forecast',
    component: Forecast,
};

const forecastItemList = [
    { hour: 18, state: 'sunny', temperature: 17, weekDay: 'Jueves' },
    { hour: 11, state: 'cloud', temperature: 24, weekDay: 'Lunes' },
    { hour: 9, state: 'cloudy', temperature: 12, weekDay: 'Martes' },
    { hour: 23, state: 'fog', temperature: 19, weekDay: 'Viernes' },
    { hour: 18, state: 'sunny', temperature: 17, weekDay: 'Jueves' },
];

export const ForecastExample = () => (
    <Forecast forecastItemList={forecastItemList} />
);
