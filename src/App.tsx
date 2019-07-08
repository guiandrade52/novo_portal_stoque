import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import { Main } from '~/styles/global';
import Header from '~/components/Header';

import Routes from '~/routes';

import store from '~/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Main>
        <Routes />
      </Main>
    </BrowserRouter>
  </Provider>
);

export default App;
