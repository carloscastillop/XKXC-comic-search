import React from 'react';
import style from './Comic.module.scss';
import Image from './Image/Image';
import PropTypes from 'prop-types';
import Pagination from './Pagination/Pagination';
import {connect} from 'react-redux';
import appConfig from '../../config';

const Comic = ({comic: {title, alt, img, num}, latestComic}) => {
    const caption = (
        <>
            <title>{title}</title>
            <span>
                {alt}
            </span>
        </>
    );
    const last = (latestComic)? latestComic.num : 0;
    const pagination = (num) ? <Pagination num={num} latest={last}/> : null;

    return (
        <section className={style.comicContainer} data-testid={'comic'}>
            <div className={style.container}>
                <h1
                    data-testid={'comic-title'}
                    className={`${style.h2} ${style['my-4']} animated fadeInUp`}>
                    {title}
                </h1>
                <h4
                    className={'animated fadeIn'}
                >
                    <span
                        data-testid={'comic-number'}
                        className={`${style['badge']} ${style['badge-secondary']}`}
                    >
                        #{num}
                    </span>
                </h4>
                <div className={style['mb-3']}>
                    <a
                        href={`${appConfig.comic.url}${num}`}
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
                    <p
                        data-testid={'comic-alt'}
                        className={'animated fadeInDown'}>
                        {alt}
                    </p>
                </div>
            </div>
            {pagination}
        </section>
    );
};

Comic.propTypes = {
    comic: PropTypes.object,
    latestComic: PropTypes.object
};

const mapStateToProps = state => {
    return {
        latestComic: state.latestComic
    };
};

export default connect(
    mapStateToProps
)(Comic);