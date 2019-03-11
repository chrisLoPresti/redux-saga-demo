import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

interface Interfaceaction {
  type: string;
  auth: { user: string };
}

function fetchUser(): {} {
  const request = axios.get('http://localhost:3004/user');
  return request;
}

function setUser(auth: Interfaceaction['auth']): void {
  axios.put('http://localhost:3004/user', auth);
}

function* workerSaga(): {} {
  let userString;
  try {
    const response = yield call(fetchUser);
    const user = response.data;
     userString = user.user;

    // dispatch a success action to the store with the new user
    yield put({ type: 'SET_CURRENT_USER_DONE', userString });
  } catch (error) {
    // dispatch a failure action to the store with the error
    userString = 'error';
    yield put({ type: 'SET_CURRENT_USER_DONE', userString });
  }
}

function* updateSaga(action: Interfaceaction): {} {
  try {
    const { auth } = action;
    const {user: userString} = auth;
    setUser(auth);
    yield put({ type: 'SET_NEW_USER_DONE', userString });
  } catch (error) {
    // dispatch a failure action to the store with the error
    const userString = 'error';
    yield put({ type: 'SET_NEW_USER_DONE', userString });
  }
}

export default function* watcherSaga(): {} {
  yield takeLatest('SET_CURRENT_USER', workerSaga);
  yield takeLatest('SET_NEW_USER', updateSaga);
}
