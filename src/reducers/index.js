import { combineReducers } from 'redux';
import comics from './comicReducer';
import errorComicReducer from './errorComicReducer';
import latestComicReducer from "./latestComicReducer";

export default combineReducers({
    fetchComic: comics,
    latestComic: latestComicReducer,
    fetchError: errorComicReducer
});