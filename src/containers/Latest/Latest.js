import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Comic from '../../components/Comic/Comic';
import style from '../../styles/global.module.scss';

function Latest({comic}) {
    if (!comic) {
        return (<div>Loading...</div>);
    }
    return (
        <section className={`${style.container} ${style['text-center']}`}>
            <Comic
                comic={comic}
            />
        </section>
    );
}

const mapStateToProps = state => {
    return {
        comic: state.fetchComic
    };
};

export default connect(
    mapStateToProps
)(Latest);

Latest.propTypes = {
    comic: PropTypes.object
};