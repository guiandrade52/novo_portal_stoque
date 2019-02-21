//Polyfill IE < 11
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';


//Redux config
import { Provider } from 'react-redux'
import configureStore from './redux-flow/_helpers/configure-store'

//CoreComponents
import App from './App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
