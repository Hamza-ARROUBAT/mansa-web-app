import { FETCH_ALL_CONTRIBUTIONS } from './contributions.types';
import { GET_ALL_CONTRIBUTIONS } from 'rest/config';

export const getAllContributions = () => ({
  type: FETCH_ALL_CONTRIBUTIONS,
  request: {
    METHOD: GET_ALL_CONTRIBUTIONS.type,
    ENDPOINT: GET_ALL_CONTRIBUTIONS.url,
    PAYLOAD: {},
    HEADERS: {},
  },
});
