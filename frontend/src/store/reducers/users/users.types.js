import { apiActionTypes } from 'api/apiUtils';
import { typeCreator } from 'utils/redux';

const { successTag, errorTag } = apiActionTypes;

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const FETCH_ALL_USERS_SUCCESS = typeCreator(FETCH_ALL_USERS, successTag);
export const FETCH_ALL_USERS_ERROR = typeCreator(FETCH_ALL_USERS, errorTag);

export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = typeCreator(ADD_USER, successTag);
export const ADD_USER_ERROR = typeCreator(ADD_USER, errorTag);

export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_USER_SUCCESS = typeCreator(REMOVE_USER, successTag);
export const REMOVE_USER_ERROR = typeCreator(REMOVE_USER, errorTag);
