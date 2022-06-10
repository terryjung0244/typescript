import { combineReducers } from '@reduxjs/toolkit';
import jphReducer from '../../screens/redux/jph/jphReducer';

/* Set Reducer Name */
export const rootReducer = combineReducers({
  jphReducer: jphReducer,
  // ...
});

export type RootState = ReturnType<typeof rootReducer>