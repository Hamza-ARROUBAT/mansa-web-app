import produce from 'immer';
import { AUTH_USER_SUCCESS } from './user.types';

const initialState = {
  isLoading: true,
  data: [],
  isConnected: false,
};

const cardsReducer = produce((draft, action) => {
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

    default:
      break;
  }
}, initialState);

export default cardsReducer;
