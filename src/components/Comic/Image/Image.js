import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import style from '../../../styles/global.module.scss';
import PropTypes from 'prop-types';

const Image = ({imageSrc, imageTitle, imageAlt, imageCaption}) => {
    const caption = (imageCaption) ? <span className={style['sr-only']}>{imageCaption}</span> : null;
    return (
        <React.Fragment>
            <LazyLoadImage
                className={`${style['img-fluid']}`}
                src={imageSrc}
                alt={imageAlt}
                title={imageTitle}
                effect="blur"
            />
            {caption}
        </React.Fragment>
    );
};

export default Image;

Image.propTypes = {
    imageSrc: PropTypes.string,
    imageTitle: PropTypes.string,
    imageAlt: PropTypes.string,
    imageCaption: PropTypes.string
};
