import { POST_AUTH_USER } from 'rest/config';
import { AUTH_USER, DISCONNECT_USER } from './user.types';

export const authUser = (credentials) => ({
  type: AUTH_USER,
  request: {
    METHOD: POST_AUTH_USER.type,
    ENDPOINT: POST_AUTH_USER.url,
    PAYLOAD: { ...credentials },
    HEADERS: {},
  },
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});
