/* eslint-disable testing-library/await-async-query */
import React from 'react'
import { render } from '@testing-library/react'
import Forecast from './Forecast'

const forecastItemList = [
    { hour: 18, state: 'sunny', temperature: 17, weekDay: 'Jueves' },
    { hour: 11, state: 'cloud', temperature: 24, weekDay: 'Lunes' },
    { hour: 9, state: 'cloudy', temperature: 12, weekDay: 'Martes' },
    { hour: 23, state: 'fog', temperature: 19, weekDay: 'Viernes' },
    { hour: 18, state: 'sunny', temperature: 17, weekDay: 'Jueves' },
];

test('Forecast render', async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>)

    const forecastItems = await findAllByTestId('forecast-item-container')

    expect(forecastItems).toHaveLength(5)
})