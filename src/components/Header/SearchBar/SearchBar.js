import React, {useRef, useState} from 'react';
import style from './SearchBar.module.scss';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../../Button/Button';

const SearchBar = ({setToggleSearch, toggleSearch, comic}) => {
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
        setInputSearch('');
        setToggleSearch(false);
        return history.push(`/${inputSearch}`);
    };
    const textInput = useRef(null);
    return (
        <div
            className={`${style.searchBar} animated fadeIn`}
        >
            <div
                className={style.searchLayout}
                onClick={() => setToggleSearch(!toggleSearch)}
            ></div>
            <div className={`${style['input-group']} ${style['input-group-lg']}`}>
                <div className={`${style['input-group-prepend']}`}>
                    <span className={`${style['input-group-text']}`}>
                        <i className="fas fa-hashtag"></i>
                    </span>
                </div>
                <input
                    type='number'
                    className={`${style['form-control']} ${!validateInputClass() ? style['is-invalid'] : ''}`}
                    aria-label='Search comic by number'
                    aria-describedby='searchHelp'
                    placeholder='Search by comic number'
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                    ref={textInput}
                    data-testid={'search-comic-input'}
                    autoFocus
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            if (validateInputClass()) {
                                handleSearchComic();
                            }
                        }
                    }}
                />
                <div className={`${style['input-group-append']}`}>
                    <Button
                        id={'searchBarBtn'}
                        title={'Search comic'}
                        label={'Search comic'}
                        disabled={(!validateInputClass()) ? true : false}
                        click={() => handleSearchComic()}
                        icon={(<i className='fas fa-search'></i>)}
                        css={`${style['btn']} ${style['btn-secondary']} ${(!validateInputClass()) ? style['disabled'] : ''}`}
                    />
                </div>
            </div>
            <small
                id="searchHelp"
                className={`${style['form-text']} ${style['text-muted']} animated fadeInLeft`}
            >
                Search up to <strong>{comic.num}</strong> comics.
            </small>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        comic: state.latestComic
    };
};

export default connect(
    mapStateToProps
)(SearchBar);

SearchBar.propTypes = {
    setToggleSearch: PropTypes.func,
    toggleSearch: PropTypes.bool,
    comic: PropTypes.object
};