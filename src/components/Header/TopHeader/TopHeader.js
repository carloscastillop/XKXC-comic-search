import React from 'react';
import style from './TopHeader.module.scss';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Button from '../../Button/Button';

const TopHeader = ({setToggleSearch, toggleSearch}) => {
    let iconBtn = (<i className='fas fa-search'></i>);
    if (toggleSearch) {
        iconBtn = (<i className='fas fa-times'></i>);
    }
    return (
        <>
            <Logo/>
            <div className={style.search}>
                <Button
                    id={'toogle-search-btn'}
                    title={'Toogle search bar'}
                    label={'Toogle search bar'}
                    css={`${style.btn} ${style['btn-sm']} ${style['btn-outline-secondary']} ${style['mt-2']}`}
                    icon={iconBtn}
                    testId={'toogle-search-btn'}
                    click={() => setToggleSearch(!toggleSearch)}

                />
            </div>
        </>
    );
};
export default TopHeader;

TopHeader.propTypes = {
    setToggleSearch: PropTypes.func,
    toggleSearch: PropTypes.bool
};