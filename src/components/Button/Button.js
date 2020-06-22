import React from 'react';
import PropTypes from 'prop-types';

const Button = ({id, label, title, disabled = false, click, css, icon, testId}) => {

    return (
        <button
            className={css}
            id={id}
            aria-label={label}
            title={title}
            disabled={disabled}
            onClick={click}
        >
            {icon}
        </button>
    );
};

export default Button;

Button.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    click: PropTypes.func,
    icon: PropTypes.string,
    css: PropTypes.string,
    testId: PropTypes.string
};