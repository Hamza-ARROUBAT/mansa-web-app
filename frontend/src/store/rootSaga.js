import { all, takeLatest } from '@redux-saga/core/effects';
import { apiCall } from 'api/apiCall';
import { AUTH_USER } from './reducers/user/user.types';
import { FETCH_ALL_CONTRIBUTIONS } from './reducers/contributions/contributions.types';

function* rootSaga() {
  // user
  yield all([takeLatest(AUTH_USER, apiCall)]);

  // contributions
  yield all([takeLatest(FETCH_ALL_CONTRIBUTIONS, apiCall)]);
}

export default rootSaga;
