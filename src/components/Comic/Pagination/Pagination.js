import React from 'react';
import style from './Pagination.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({num, latest}) => {
    if (!num) {
        return null;
    }
    const maxNum = parseInt(latest);

    let previousBtn = (
        <li className={`${style['page-item']} ${(num - 1 > 0) ? '' : style['disabled']+' '+style['pageDisabled'] }`}>
            <Link
                className={style['page-link']}
                to={`/${num - 1}`}
                tabIndex="-1"
                aria-disabled={(num - 1 > 0) ? '' : true}
            >
                Previous
            </Link>
        </li>
    );

    let nextBtn = (
        <li className={`${style['page-item']} ${(num + 1 > maxNum) ? style['disabled']+' '+style['pageDisabled'] : ''}`}>
            <Link
                className={style['page-link']}
                to={`/${num + 1}`}
                aria-disabled={(num + 1 >= maxNum) ? true : ''}
            >
                Next
            </Link>
        </li>
    );

    return (
        <div data-testid={'pagination'} className={`${style.comicPagination} ${style['mt-5']}`}>
            <nav aria-label="Comics page navigation">
                <ul className={`${style['pagination']} ${style['justify-content-center']}`}>
                    {previousBtn}
                    {nextBtn}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;

Pagination.propTypes = {
    num: PropTypes.number,
    latest: PropTypes.number
};


