import {FETCH_ERROR} from '../actions/types';

export default function errorComicReducer(state = false, action) {
    switch (action.type) {
    case FETCH_ERROR:
        return action.error;
    default:
        return state;
    }
}