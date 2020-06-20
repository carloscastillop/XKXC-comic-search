import {FETCH_COMIC} from '../actions/types';

export default function comicReducer(state = null, action) {
    switch (action.type) {
    case FETCH_COMIC:
        return action.comics;
    default:
        return state;
    }
}