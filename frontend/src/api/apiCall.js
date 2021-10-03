import { put } from 'redux-saga/effects';
import { typeCreator } from 'utils/redux';
import { errorHandler } from './errorHandler';
import { apiActionTypes } from './apiUtils';
import axios from 'axios';

export function* apiCall(action) {
  const { successTag, errorTag } = apiActionTypes;
  const { type, request } = action;

  try {
    const response = yield axios({
      method: request.METHOD,
      url: request.ENDPOINT,
      data: request.PAYLOAD,
    });

    yield put({
      type: typeCreator(type, successTag),
      payload: response,
    });
  } catch (error) {
    const errorType = typeCreator(type, errorTag);
    const errorObject = errorHandler(errorType, error);
    console.error(errorObject);
  }
}
