import React from 'react';
import { render } from '@testing-library/react';
import CityList from './CityList';

const cities = [
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Bogota', country: 'Colombia' },
    { city: 'Santiago', country: 'Chile' },
    { city: 'Punta del Este', country: 'Uruguay' },
];

test('CityList render', async () => {
    const { findAllByRole } = render(<CityList cities={cities} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const items = await findAllByRole('listitem');

    expect(items).toHaveLength(4);
});
