import produce from 'immer';

const initState = {
  jphApiResult: {
    processing: false, 
    processed: false,
    message: 'hi',
    result: null
  }
}

export default function jphReducer(state = initState, action) {
  return produce(state, draft => {
    
    switch (action.type) {    
      return state;
    }
  })
};