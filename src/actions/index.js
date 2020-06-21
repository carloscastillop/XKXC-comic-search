import {LATEST_COMIC, FETCH_COMIC, FETCH_ERROR} from './types';
import axios from 'axios';

const apiUrl = 'https://xkcd.now.sh/?comic='; //latest or 1000

export const fetchComic = (comic) => {
    return {
        type: FETCH_COMIC,
        comic
    };
};

export const latestComic = (comic) => {
    return {
        type: LATEST_COMIC,
        comic
    };
};

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        error
    };
};

export const fetchComics = (num = 'latest') => {
    return (dispatch) => {
        dispatch(fetchComic(null));
        dispatch(fetchError(false));
        return axios.get(apiUrl+num, {
            crossDomain: true,
            dataType: 'json',
            logLevel: 'debug',
            changeOrigin: true
        })
            .then(response => {
                dispatch(fetchComic(response.data));
                if(num === 'latest'){
                    dispatch(latestComic(response.data));
                }
            })
            .catch(error => {
                dispatch(fetchError(true));
                throw(error);
            });
    };
};
