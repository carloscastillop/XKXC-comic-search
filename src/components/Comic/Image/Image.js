import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';
import style from './Image.module.scss';

const Image = ({imageSrc, imageTitle, imageAlt, imageCaption}) => {
    const caption = (imageCaption) ?
        (<div className={style.imageCaptionContainer}>
            <div className={style.imageCaption}>
                {imageCaption}
            </div>
        </div>) : null;

    return (
        <React.Fragment>
            <div className={style.imageContainer}>
                <LazyLoadImage
                    className={`${style['img-fluid']}`}
                    src={imageSrc}
                    alt={imageAlt}
                    title={imageTitle}
                    effect="blur"
                />
                {caption}
            </div>
        </React.Fragment>
    );
};

export default Image;

Image.propTypes = {
    imageSrc: PropTypes.string,
    imageTitle: PropTypes.string,
    imageAlt: PropTypes.string,
    imageCaption: PropTypes.object
};
