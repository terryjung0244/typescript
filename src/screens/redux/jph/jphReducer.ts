import produce from 'immer';

interface JPHReducerActionType {
  type: string, 
  payload: string | null | number | {} | []
}

interface JPHReducerStateType {
  jphApiResult: {
    processing: boolean, 
    processed: boolean,
    message: string,
    result: any
  }
}

const initState = {
  jphApiResult: {
    processing: false, 
    processed: false,
    message: 'hi',
    result: null
  }
}

export default function jphReducer(state: JPHReducerStateType = initState, action: JPHReducerActionType) {
  return produce(state, draft => {
    
    switch (action.type) {    
      default:
      return state;
    }
  })
};