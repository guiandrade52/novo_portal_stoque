import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
//import { createLogger } from 'redux-logger';
import { rootReducers } from '../_reducers'

//const loggerMiddleware = createLogger();

export default (INITIAL_STATE = {}) => {
    const enhacer = compose(applyMiddleware(thunk, promise), logger())
    const store = createStore(rootReducers, INITIAL_STATE, enhacer)

    return store
}

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()