import { all, takeLatest } from '@redux-saga/core/effects';
import { apiCall } from 'api/apiCall';
import { AUTH_USER } from './reducers/user/user.types';
import {
  ADD_CONTRIBUTION,
  FETCH_ALL_CONTRIBUTIONS,
  REMOVE_CONTRIBUTION,
} from './reducers/contributions/contributions.types';

function* rootSaga() {
  // user
  yield all([takeLatest(AUTH_USER, apiCall)]);

  // contributions
  yield all([takeLatest(FETCH_ALL_CONTRIBUTIONS, apiCall)]);
  yield all([takeLatest(ADD_CONTRIBUTION, apiCall)]);
  yield all([takeLatest(REMOVE_CONTRIBUTION, apiCall)]);
}

export default rootSaga;
