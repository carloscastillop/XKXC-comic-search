import React from 'react';
import {render} from '@testing-library/react';
import Loading from '../Loading';

test('Get Loading container', () => {
    const {getByTestId} = render(<Loading/>);
    const linkElement = getByTestId('loading');
    expect(linkElement).toBeInTheDocument();
});
