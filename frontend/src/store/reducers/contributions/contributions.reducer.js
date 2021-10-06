import produce, { current } from 'immer';
import {
  ADD_CONTRIBUTION_SUCCESS,
  FETCH_ALL_CONTRIBUTIONS_SUCCESS,
  CHANGE_CONTRIBUTION_SUCCESS,
  REMOVE_CONTRIBUTION_SUCCESS,
} from './contributions.types';

const initialState = {
  isLoading: true,
  data: [],
};

const contributionsReducer = produce((draft, action) => {
  // globals
  const currentDraft = current(draft);

  // switch
  switch (action.type) {
    case FETCH_ALL_CONTRIBUTIONS_SUCCESS:
      draft.isLoading = true;
      draft.data = action.payload.data;
      draft.isLoading = false;
      break;

    case ADD_CONTRIBUTION_SUCCESS:
      draft.isLoading = true;
      draft.data = [...currentDraft.data, action.payload.contribution];
      draft.isLoading = false;
      break;

    case CHANGE_CONTRIBUTION_SUCCESS:
      draft.isLoading = true;
      draft.data = currentDraft.data.map((contribution) => {
        if (contribution.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return contribution;
        }
      });
      draft.isLoading = false;
      break;

    case REMOVE_CONTRIBUTION_SUCCESS:
      draft.isLoading = true;
      draft.data = currentDraft.data.filter(
        (contribution) => contribution.id !== action.payload.data.id
      );
      draft.isLoading = false;
      break;

    default:
      break;
  }
}, initialState);

export default contributionsReducer;
