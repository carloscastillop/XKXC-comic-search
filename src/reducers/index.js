import { combineReducers } from 'redux';
import comicReducer from './comicReducer';
import errorComicReducer from './errorComicReducer';
import latestComicReducer from './latestComicReducer';

export default combineReducers({
    fetchComic: comicReducer,
    latestComic: latestComicReducer,
    fetchError: errorComicReducer
});