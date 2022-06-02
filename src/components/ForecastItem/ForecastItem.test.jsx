import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test('ForecastItem render component', () => {
    const { findByRole } = render(<ForecastItem weekDay='Lunes' hour={10} state='sunny' temperature={30} />) 

    
})