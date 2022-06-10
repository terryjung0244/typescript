import { takeLatest, put, select, take } from "redux-saga/effects";

function* jphSagaFunc (action: any) {
  
  console.log("hello");  
}

export function* jphSagaWatcher() {
  // yield takeLatest (WEATHER_API_CALL_ACTION, getApiResult)
}