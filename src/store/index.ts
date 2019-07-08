import { createStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { RepositoriesState } from './ducks/repositories/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  repositories: RepositoriesState
}

const store: Store<ApplicationState> = createStore(rootReducer, {}, devToolsEnhancer({}));

export default store;
