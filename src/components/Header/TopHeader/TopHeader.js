import React from 'react';
import style from './TopHeader.module.scss';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';

const TopHeader = ({setToggleSearch, toggleSearch}) => {
    let iconBtn = (<i className='fas fa-search'></i>);
    if (toggleSearch) {
        iconBtn = (<i className='fas fa-times'></i>);
    }
    return (
        <>
            <Logo/>
            <div className={style.search}>
                <button
                    aria-label='Toogle search bar'
                    title='Toogle search bar'
                    className={`${style.btn} ${style['btn-sm']} ${style['btn-outline-secondary']} ${style['mt-2']}`}
                    onClick={() => setToggleSearch(!toggleSearch)}
                >
                    {iconBtn}
                </button>
            </div>
        </>
    );
};
export default TopHeader;

TopHeader.propTypes = {
    setToggleSearch: PropTypes.func,
    toggleSearch: PropTypes.bool
};