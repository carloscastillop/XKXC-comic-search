import {FETCH_COMIC, FETCH_ERROR} from './types';
import axios from 'axios';

const apiUrl = 'https://xkcd.now.sh/?comic=latest';

export const fetchComic = (comics) => {
    return {
        type: FETCH_COMIC,
        comics
    };
};

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        error
    };
};

export const fetchComics = () => {
    return (dispatch) => {
        dispatch(fetchComic(null));
        dispatch(fetchError(false));
        return axios.get(apiUrl, {
            crossDomain: true,
            dataType: 'json',
            logLevel: 'debug',
            changeOrigin: true
        })
            .then(response => {
                dispatch(fetchComic(response.data));
            })
            .catch(error => {
                dispatch(fetchError(true));
                throw(error);
            });
    };
};
