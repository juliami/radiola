// Reducer
import getCovers from "../utils/GetCovers";
import * as actions from './actions';




export function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'INCREASE':
      return { count: count + 1 }
    default:
      return state
  }
}

export function parsePlaylist(state = { albums: '' }, action) {
  switch (action.type) {
    case 'PARSE_PLAYLIST':
      return { albums: getCovers(action.unformattedInput) }
    default:
      return state
  }
}




export const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_DATA_REQUESTED:
      return { ...state, isLoading: true };
    case actions.GET_DATA_DONE:
      return { ...state, isLoading: false, repositories: action.payload };
    case actions.GET_DATA_FAILED:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
  }
};
