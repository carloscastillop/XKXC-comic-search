import React from 'react';
import {render} from '@testing-library/react';
import Comic from '../Comic';

test('Get Comic container', () => {
    const {getByTestId} = render(<Comic/>);
    const linkElement = getByTestId('comic');
    expect(linkElement).toBeInTheDocument();
});
