import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react';

test('Weather render', async () => {
    const { findByTestId } = render(<Weather temperature={10} state={'sunny'} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const temp = await findByTestId('heading');

    expect(temp).toHaveTextContent('10');
});
