import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {fetchComics} from './actions/index';
import './index.modules.scss';
import App from '../src/containers/App/App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './ErrorBoundary';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
store.dispatch(fetchComics());

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
