import produce, { current } from 'immer';
import { ADD_USER_SUCCESS, FETCH_ALL_USERS_SUCCESS } from './users.types';

const initialState = {
  isLoading: true,
  data: [],
};

const userReducer = produce((draft, action) => {
  // globals
  const currentDraft = current(draft);

  // switch
  switch (action.type) {
    case FETCH_ALL_USERS_SUCCESS:
      draft.isLoading = true;
      draft.data = action.payload.data;
      draft.isLoading = false;
      break;

    case ADD_USER_SUCCESS:
      draft.isLoading = true;
      draft.data = [...currentDraft.data, action.payload.data];
      draft.isLoading = false;
      break;

    default:
      break;
  }
}, initialState);

export default userReducer;
