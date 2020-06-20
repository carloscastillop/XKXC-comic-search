import React from 'react';
import style from './Comic.module.scss';
import Image from './Image/Image';
import PropTypes from 'prop-types';

const Comic = ({comic: {title, alt, img, num}}) => {
    const caption = (
        <>
            <title>{title}</title>
            <span>
                {alt}
            </span>
        </>
    );
    return (
        <section className={style.comicContainer} data-testid={'comic'}>
            <div className={style.container}>
                <h1 className={`${style.h2} ${style['my-4']} animated fadeInUp`}>
                    {title}
                </h1>
                <h4 className={'animated fadeIn'}>
                    <span className={`${style['badge']} ${style['badge-secondary']}`}>
                        #{num}
                    </span>
                </h4>
                <div className={style['mb-3']}>
                    <a
                        href={`//xkcd.com/${num}`}
                        title={title}
                        rel="noreferrer"
                    >
                        <Image
                            imageSrc={img}
                            imageTitle={title}
                            imageAlt={title}
                            imageCaption={caption}
                        />
                    </a>
                </div>
                <div>
                    <p className={'animated fadeInUp'}>
                        {alt}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Comic;

Comic.propTypes = {
    comic: PropTypes.object.isRequired
};