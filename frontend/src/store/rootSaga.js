import { all, takeLatest } from '@redux-saga/core/effects';
import { apiCall } from 'api/apiCall';
import { AUTH_USER } from './reducers/user/user.types';

function* rootSaga() {
  // movies
  yield all([takeLatest(AUTH_USER, apiCall)]);
}

export default rootSaga;
