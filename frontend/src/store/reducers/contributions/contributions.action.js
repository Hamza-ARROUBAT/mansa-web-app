import {
  FETCH_ALL_CONTRIBUTIONS,
  ADD_CONTRIBUTION,
  CHANGE_CONTRIBUTION,
  REMOVE_CONTRIBUTION,
} from './contributions.types';
import {
  DELETE_CONTRIBUTION,
  GET_ALL_CONTRIBUTIONS,
  PUT_CONTRIBUTION,
  POST_CONTRIBUTION,
} from 'rest/config';

export const getAllContributions = () => ({
  type: FETCH_ALL_CONTRIBUTIONS,
  request: {
    METHOD: GET_ALL_CONTRIBUTIONS.type,
    ENDPOINT: GET_ALL_CONTRIBUTIONS.url,
    PAYLOAD: {},
    HEADERS: {},
  },
});

export const postContribution = (contribution) => ({
  type: ADD_CONTRIBUTION,
  request: {
    METHOD: POST_CONTRIBUTION.type,
    ENDPOINT: POST_CONTRIBUTION.url,
    PAYLOAD: { ...contribution },
    HEADERS: {},
  },
});

export const changeContribution = (contribution) => ({
  type: CHANGE_CONTRIBUTION,
  request: {
    METHOD: PUT_CONTRIBUTION.type,
    ENDPOINT: PUT_CONTRIBUTION.url,
    PAYLOAD: { contribution },
    HEADERS: {},
  },
});

export const deleteContribution = (id) => ({
  type: REMOVE_CONTRIBUTION,
  request: {
    METHOD: DELETE_CONTRIBUTION.type,
    ENDPOINT: DELETE_CONTRIBUTION.url + `/${id}`,
    PAYLOAD: {},
    HEADERS: {},
  },
});
