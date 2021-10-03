import { apiActionTypes } from 'api/apiUtils';
import { typeCreator } from 'utils/redux';

const { successTag, errorTag } = apiActionTypes;

export const FETCH_ALL_CONTRIBUTIONS = 'FETCH_ALL_CONTRIBUTIONS';
export const FETCH_ALL_CONTRIBUTIONS_SUCCESS = typeCreator(FETCH_ALL_CONTRIBUTIONS, successTag);
export const FETCH_ALL_CONTRIBUTIONS_ERROR = typeCreator(FETCH_ALL_CONTRIBUTIONS, errorTag);

// export const DELETE_MOVIE = 'DELETE_MOVIE';

