import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo';

test('CityInfo render', async () => {
    const { findAllByRole } = render(
        <CityInfo city="Buenos Aires" country="Argentina" />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityAndCountry = await findAllByRole('heading');

    expect(cityAndCountry[0]).toHaveTextContent('Buenos Aires');
    expect(cityAndCountry[1]).toHaveTextContent('Argentina');
});
