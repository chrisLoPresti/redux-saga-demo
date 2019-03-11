import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';

export default function* rootSaga(): IterableIterator<any> {
  yield all([fork(userSaga)]);
}
