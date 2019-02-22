//Polyfill IE < 11
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';


//Redux config
import { Provider } from 'react-redux'
import configureStore from './redux-flow/_helpers/configure-store'

//CoreComponents
import Security from './security'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Security />
    </Provider>,
    document.getElementById('root'));
