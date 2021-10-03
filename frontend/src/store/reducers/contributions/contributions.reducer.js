import produce from 'immer';
import { FETCH_ALL_CONTRIBUTIONS_SUCCESS } from './contributions.types';

const initialState = {
  isLoading: true,
  data: [],
};

const contributionsReducer = produce((draft, action) => {
  // globals
  // const currentDraft = current(draft);

  // switch
  switch (action.type) {
    case FETCH_ALL_CONTRIBUTIONS_SUCCESS:
      draft.isLoading = true;
      draft.data = action.payload.data;
      draft.isLoading = false;
      break;

    default:
      break;
  }
}, initialState);

export default contributionsReducer;
