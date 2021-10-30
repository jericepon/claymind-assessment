import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './scss/styles.scss';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
