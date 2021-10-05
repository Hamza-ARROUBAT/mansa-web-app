import { GET_ALL_USERS, POST_ADD_USER } from 'rest/config';
import { ADD_USER, FETCH_ALL_USERS } from './users.types';

export const fetchAllUsers = () => ({
  type: FETCH_ALL_USERS,
  request: {
    METHOD: GET_ALL_USERS.type,
    ENDPOINT: GET_ALL_USERS.url,
    PAYLOAD: {},
    HEADERS: {},
  },
});

export const addUser = (user) => ({
  type: ADD_USER,
  request: {
    METHOD: POST_ADD_USER.type,
    ENDPOINT: POST_ADD_USER.url,
    PAYLOAD: { ...user },
    HEADERS: {},
  },
});
