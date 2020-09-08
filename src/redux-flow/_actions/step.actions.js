import { stepConstants } from "../_constants/step.constants";


const next = activeStep => ({ type: stepConstants.NEXT, payload: activeStep + 1 })
const back = activeStep => ({ type: stepConstants.BACK, payload: activeStep - 1 })
const reset = () => ({ type: stepConstants.RESET, payload: 0 })

export const stepActions = {
    next,
    back,
    reset
}