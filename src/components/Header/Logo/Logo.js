import React from 'react';
import style from './Logo.module.scss';
import logo from '../../../assets/logo_2.png';
import {Link} from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' className={`${style.logoContainer}`} title={'XKXC comic search'}>
            <span className={`${style.btn} ${style['btn-outline-secondary']}`}>
                <i className='fas fa-home'></i>
            </span>
            <img className={`${style.logo} ${style['img-fluid']}`} src={logo} alt='logo'/>
            <h3>XKXC comic search</h3>
        </Link>
    );
};

export default Logo;