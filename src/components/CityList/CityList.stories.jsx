import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions';

export default {
    title: 'CityList',
    component: CityList,
};

const cities = [
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Bogota', country: 'Colombia' },
    { city: 'Santiago', country: 'Chile' },
    { city: 'Punta del Este', country: 'Uruguay' },
];

export const CityListShow = () => <CityList cities={cities} onClickCity={action('click en city')} />;
