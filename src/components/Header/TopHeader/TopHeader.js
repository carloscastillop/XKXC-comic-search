import React from 'react';
import style from './TopHeader.module.scss';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';

const TopHeader = ({handleToggleSearchBar, toggleSearch}) => {
    let iconBtn = (<i className='fas fa-search'></i>);
    if (toggleSearch) {
        iconBtn = (<i className='fas fa-times'></i>);
    }
    return (
        <>
            <Logo/>
            <div className={style.search}>
                <button
                    aria-label='toogle Search comic'
                    className={`${style.btn} ${style['btn-sm']} ${style['btn-outline-secondary']} ${style['mt-2']}`}
                    onClick={() => handleToggleSearchBar()}
                >
                    {iconBtn}
                </button>
            </div>
        </>
    );
};
export default TopHeader;

TopHeader.propTypes = {
    handleToggleSearchBar: PropTypes.func,
    toggleSearch: PropTypes.bool
};