import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import style from '../../styles/global.module.scss';
import Comic from '../../components/Comic/Comic';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import {fetchError} from '../../actions';

function Latest({comic, error}) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchError(false));
    }, [dispatch]);

    let latestComic = null;
    if (error) {
        latestComic = <Error/>;
    }
    else if (!comic) {
        latestComic = <Loading/>;
    } else {
        latestComic = <Comic
            comic={comic}
        />;
    }

    return (
        <section
            data-testid={'latest'}
            className={`${style.container} ${style['text-center']}`}
        >
            {latestComic}
        </section>
    );
}

const mapStateToProps = state => {
    return {
        comic: state.latestComic,
        error: state.fetchError
    };
};

export default connect(
    mapStateToProps
)(Latest);

Latest.propTypes = {
    comic: PropTypes.object,
    error: PropTypes.bool
};