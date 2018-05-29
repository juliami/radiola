
import fetchJsonp from 'fetch-jsonp';

export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const GET_DATA_DONE = 'GET_DATA_DONE';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';







export function getDataRequested() {
  return {
    type: 'GET_DATA_REQUESTED'
  };
}

export function getDataDone(data) {
  return {
    type: 'GET_DATA_DONE',
    payload: data
  };
}

export function getDataFailed(error) {
  return {
    type: 'GET_DATA_FAILED',
    payload: error
  };
}

export function getData() {
  return dispatch => {
    // set state to "loading"
    dispatch(getDataRequested());

    fetchJsonp('https://api.deezer.com/search?q=artist:%22Cold%20Chisel%22%20track:%22Bow%20River%22&output=jsonp')
      .then(response => response.json())
      .then(data => {
        // set state for success
        dispatch(getDataDone(data));
      })
      .catch(error => {
        // set state for error
        dispatch(getDataFailed(error));
      })
  }
}






export const increaseAction = {
  type: 'INCREASE',
};

export const parsePlaylist = (unformattedInput) => ({
  type: 'PARSE_PLAYLIST',
  unformattedInput
});
