import React, {useRef, useState} from 'react';
import style from './SearchBar.module.scss';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const SearchBar = ({handleToggleSearchBar, comic}) => {
    const [inputSearch, setInputSearch] = useState('');
    let history = useHistory();
    const validateInputClass = () => {
        const maxNum = (comic.num) ? comic.num : 10000;
        if ((inputSearch.length > 0) && (isNaN(inputSearch) ||
            parseInt(inputSearch) <= 0 ||
            parseInt(inputSearch) > maxNum)) {
            return false;
        }
        return true;
    };
    const handleSearchComic = () => {
        const id = inputSearch;
        setInputSearch('');
        handleToggleSearchBar(false);
        return history.push(`/${id}`);
    };
    const textInput = useRef(null);
    return (
        <div
            className={`${style.searchBar} animated fadeInDown`}
        >
            <div
                className={style.searchLayout}
                onClick={() => handleToggleSearchBar()}
            ></div>
            <div className={`${style['input-group']} ${style['input-group-lg']}`}>
                <div className={`${style['input-group-prepend']}`}>
                    <span className={`${style['input-group-text']}`}>
                        <i className="fas fa-hashtag"></i>
                    </span>
                </div>
                <input
                    type='text'
                    className={`${style['form-control']} ${!validateInputClass() ? style['is-invalid'] : ''}`}
                    aria-label='Search comic by number'
                    aria-describedby='searchHelp'
                    placeholder='Search by comic number'
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                    ref={textInput}
                    autoFocus
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            if(validateInputClass()){
                                handleSearchComic();
                            }
                        }
                    }}
                />
                <div className={`${style['input-group-append']}`}>
                    <button
                        className={`${style['btn']} ${style['btn-secondary']} ${(!validateInputClass()) ? style['disabled'] : ''}`}
                        id='searchBarBtn'
                        aria-label='Search'
                        disabled={(!validateInputClass()) ? true : false}
                        onClick={() => handleSearchComic()}
                    >
                        <i className='fas fa-search'></i>
                    </button>
                </div>
            </div>
            <small
                id="searchHelp"
                className="form-text text-muted"
            >
                Search up to {comic.num} comics.
            </small>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        comic: state.fetchComic
    };
};

export default connect(
    mapStateToProps
)(SearchBar);

SearchBar.propTypes = {
    handleToggleSearchBar: PropTypes.func,
    comic: PropTypes.object
};