import { all } from 'redux-saga/effects';
import couterSaga from '../features/counter/counterSaga';

function* helloSaga() {
  console.log("Hello saga");
}

export default function* rootSaga() {
  console.log('Root Saga');
  yield all([helloSaga(), couterSaga()]);
}