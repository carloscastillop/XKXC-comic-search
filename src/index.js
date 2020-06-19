import React from 'react';
import ReactDOM from 'react-dom';
import './index.modules.scss';
import App from '../src/containers/App/App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
