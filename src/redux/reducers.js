// Reducer
import { chopPlaylist } from "../utils/ParsePlaylist";

export function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'INCREASE':
      return { count: count + 1 }
    default:
      return state
  }
}

export function parsePlaylist(state = { albums: [] }, action) {
  switch (action.type) {
    case 'PARSE_PLAYLIST':
      return { albums: chopPlaylist(action.unformattedInput) }
    default:
      return state
  }
}