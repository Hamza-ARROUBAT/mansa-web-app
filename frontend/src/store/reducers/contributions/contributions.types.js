import { apiActionTypes } from 'api/apiUtils';
import { typeCreator } from 'utils/redux';

const { successTag, errorTag } = apiActionTypes;

export const FETCH_ALL_CONTRIBUTIONS = 'FETCH_ALL_CONTRIBUTIONS';
export const FETCH_ALL_CONTRIBUTIONS_SUCCESS = typeCreator(FETCH_ALL_CONTRIBUTIONS, successTag);
export const FETCH_ALL_CONTRIBUTIONS_ERROR = typeCreator(FETCH_ALL_CONTRIBUTIONS, errorTag);

export const ADD_CONTRIBUTION = 'ADD_CONTRIBUTION';
export const ADD_CONTRIBUTION_SUCCESS = typeCreator(ADD_CONTRIBUTION, successTag);
export const ADD_CONTRIBUTION_ERROR = typeCreator(ADD_CONTRIBUTION, errorTag);

export const REMOVE_CONTRIBUTION = 'REMOVE_CONTRIBUTION';
export const REMOVE_CONTRIBUTION_SUCCESS = typeCreator(REMOVE_CONTRIBUTION, successTag);
export const REMOVE_CONTRIBUTION_ERROR = typeCreator(REMOVE_CONTRIBUTION, errorTag);