import React from 'react';
import {render} from '@testing-library/react';
import Image from '../Image';

const image = {
    img: 'https://via.placeholder.com/150',
    title: 'image title',
    alt: 'image alt',
    caption: null
};

test('Get Loading container', () => {
    const {getByTestId} = render(<Image
        imageSrc={image.img}
        imageTitle={image.title}
        imageAlt={image.alt}
        imageCaption={image.caption}/>);

    const linkElement = getByTestId('image');
    expect(linkElement).toBeInTheDocument();
});
