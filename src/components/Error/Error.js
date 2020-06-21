import React from 'react';
import style from './Error.module.scss';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div className={style.errorContainer}>
            <div className={style['mb-5']}>
                <i className="fas fa-ghost fa-7x animated fadeInLeftBig"></i>
            </div>
            <h1 className='animated fadeInUp'>Sorry!</h1>
            <p className='animated fadeIn'>Something went wrong!</p>
            <Link to={'/'} className={`${style.btn} ${style['btn-outline-secondary']} ${style['btn-lg']} ${style['mb-3']}`}>
                <i className='fas fa-home'></i>
            </Link>
            <p className={`${style['text-muted']} ${style.small}`}>Please start again.</p>
        </div>
    );
};
export default Error;