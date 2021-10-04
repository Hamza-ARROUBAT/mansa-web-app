import produce from 'immer';
import { AUTH_USER_SUCCESS, DISCONNECT_USER } from './user.types';

const initialState = {
  isLoading: true,
  data: {},
  isConnected: false,
};

const userReducer = produce((draft, action) => {
  // globals
  // const currentDraft = current(draft);

  // switch
  switch (action.type) {
    case AUTH_USER_SUCCESS:
      draft.isLoading = true;
      draft.data = action.payload.data;
      draft.isConnected = true;
      draft.isLoading = false;
      break;

    case DISCONNECT_USER:
      draft.isLoading = true;
      draft.isConnected = false;
      draft.isLoading = false;
      break;

    default:
      break;
  }
}, initialState);

export default userReducer;
