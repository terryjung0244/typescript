import { all } from 'redux-saga/effects';
import { jphSagaWatcher } from '../../screens/redux/jph/jphSaga';

export default function* rootSaga() {
  yield all([
    jphSagaWatcher()
  ])
};