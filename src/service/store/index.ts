import { combineReducers } from '@reduxjs/toolkit';
import jphReducer from '../../view/redux/jph/jphReducer';

/* Set Reducer Name */
export const rootReducer = combineReducers({
  jphReducer: jphReducer,
  // ...
});

export type RootState = ReturnType<typeof rootReducer>