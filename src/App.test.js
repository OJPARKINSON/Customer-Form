import React from 'react';
import App from './App';
import {cleanup, fireEvent, render} from '@testing-library/react';

test('Expected Text is displayed', async () => {
    const {findAllByText} = render(<App/>);

    const ratingLegend = await findAllByText(/What would you rate our service:/);
    expect(ratingLegend.length).toStrictEqual(1);
});
