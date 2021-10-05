import { apiActionTypes } from 'api/apiUtils';
import { typeCreator } from 'utils/redux';

const { successTag, errorTag } = apiActionTypes;

export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_SUCCESS = typeCreator(AUTH_USER, successTag);
export const AUTH_USER_ERROR = typeCreator(AUTH_USER, errorTag);

export const DISCONNECT_USER = 'DISCONNECT_USER';
