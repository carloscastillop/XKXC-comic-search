import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
    return (
        <footer
            className={style.footer}
        >
            <div
                className={`${style['container']} ${style['text-muted']}`}
            >
                <p>XKXC comic search</p>
            </div>
        </footer>
    );
};

export default Footer
