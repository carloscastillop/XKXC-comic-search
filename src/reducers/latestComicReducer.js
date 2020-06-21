import {LATEST_COMIC} from '../actions/types';

export default function latestComicReducer(state = null, action) {
    switch (action.type) {
    case LATEST_COMIC:
        return action.comic;
    default:
        return state;
    }
}