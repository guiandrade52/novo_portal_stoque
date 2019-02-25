import { combineReducers } from 'redux'

//Reducers
import { app } from './app.reducer'
import { auth } from './auth.reducer'
import { toastr } from './toastr.reducer'

export const rootReducers = combineReducers({
    app,
    auth,
    toastr
})