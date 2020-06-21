import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from '../../styles/global.module.scss';
import Comic from '../../components/Comic/Comic';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

function Latest({comic, error}) {

    if (error) {
        return (<Error/>);
    }

    if (!comic) {
        return (<Loading/>);
    }
    return (
        <section
            data-testid={'latest'}
            className={`${style.container} ${style['text-center']}`}
        >
            <Comic
                comic={comic}
            />
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