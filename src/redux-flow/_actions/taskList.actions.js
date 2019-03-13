import { taskListConstants } from "../_constants/taskList.constants";
import { requestServices } from "../_services/request.services";
import { helpersActions } from "../_helpers";

const request = () => ({ type: taskListConstants.REQUEST })
const success = tasks => ({ type: taskListConstants.SUCCESS, payload: tasks })
const failure = () => ({ type: taskListConstants.FAILURE })


const fetchTasks = filter => dispatch => {
    dispatch(request())
    requestServices.get('Task', filter)
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const selected = executionId => ({ type: taskListConstants.SELECTED, payload: executionId })

const showDetailsTask = (action) => ({ type: taskListConstants.SHOW_TASK_DETAILS, payload: action })

const closeDetailsMobile = () => ({ type: taskListConstants.CLOSE_VIEW_MOBILE })


export const taskListActions = {
    selected,
    fetchTasks,
    showDetailsTask,
    closeDetailsMobile
}