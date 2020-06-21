import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {fetchComics} from '../../actions/index';
import style from '../../styles/global.module.scss';
import Comic from '../../components/Comic/Comic';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const SearchResult = ({comic, error}) => {
    let {num} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComics(num));
    }, [num, dispatch]);

    if (error) {
        return (<Error/>);
    }

    if (!comic) {
        return (<Loading/>);
    }
    return (
        <section
            data-testid={'search-result'}
            className={`${style.container} ${style['text-center']}`}
        >
            <Comic
                comic={comic}
            />
        </section>
    );
};

const mapStateToProps = state => {
    return {
        comic: state.fetchComic,
        error: state.fetchError
    };
};

export default connect(
    mapStateToProps
)(SearchResult);

SearchResult.propTypes = {
    comic: PropTypes.object,
    error: PropTypes.bool
};