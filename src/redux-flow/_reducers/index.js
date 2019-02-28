import { combineReducers } from 'redux'

//Reducers
import { app } from './app.reducer'
import { auth } from './auth.reducer'
import { toastr } from './toastr.reducer'
import { steppersReducer as step } from './step.reducer'
import { repositoryReducer as repository } from './repositry.reducer'
import { inputFiles } from './inputFiles.reducer'
import { reducer as form } from 'redux-form'
import { newTaskReducer as newTask } from './newTask.reducer'
import { taskListReducer as taskList } from './taskList.reducer'
import { filterReducer as filter } from './filter.reducer'

export const rootReducers = combineReducers({
    app,
    auth,
    toastr,
    step,
    repository,
    inputFiles,
    form,
    newTask,
    taskList,
    filter
})