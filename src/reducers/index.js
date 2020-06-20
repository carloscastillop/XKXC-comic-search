import { combineReducers } from 'redux';
import comics from './comicReducer';
import errorComicReducer from './errorComicReducer';

export default combineReducers({
    fetchComic: comics,
    fetchError: errorComicReducer
});