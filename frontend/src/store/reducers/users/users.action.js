import { DELETE_USER, GET_ALL_USERS, POST_ADD_USER } from 'rest/config';
import { ADD_USER, FETCH_ALL_USERS, REMOVE_USER } from './users.types';

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

export const removeUser = (id) => ({
  type: REMOVE_USER,
  request: {
    METHOD: DELETE_USER.type,
    ENDPOINT: DELETE_USER.url + `/${id}`,
    PAYLOAD: {},
    HEADERS: {},
  },
});
