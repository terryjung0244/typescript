import { JPH_ACTION_CONST } from "../../../service/const/actionConst";

const {JPH_API_REQUEST, JPH_API_FAILURE, JPH_API_SUCCESS, SET_INPUT} = JPH_ACTION_CONST

export const jphReducerApiRequest = () => ({
  type: JPH_API_REQUEST
})

export const jphReducerApiSuccess = () => ({
  type: JPH_API_SUCCESS
})

export const jphReducerApiFailure = () => ({
  type: JPH_API_FAILURE
})

export const jphReducerSetInput = () => ({
  type: SET_INPUT
})