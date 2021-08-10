import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';

function* log(action: PayloadAction) {
  console.log('Log', action);
}

export default function* couterSaga() {
  console.log('Counter saga');

  yield takeEvery(increment().type, log);
}