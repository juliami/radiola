
import fetchJsonp from 'fetch-jsonp';
import { chopPlaylist } from "../utils/ParsePlaylist";
import { makeRequestUrl } from "../utils/ApiRequest";
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


export const parsePlaylist = (unformattedInput) => ({
  type: 'PARSE_PLAYLIST',
  unformattedInput
});



export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}


const serialJsonRequest = (requestsArray) => {
  const responses = [];
  for (let request of requestsArray) {
    responses.push(fetchJsonp(request))
  }
  console.log('lots of responses');
  //console.log(responses);
  return responses;
}

export function itemsFetchData(content) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));



    const tracks = chopPlaylist(content);

    const requests = [];
    for (let track of tracks) {
      requests.push(makeRequestUrl(track));
    }

    const JSONPromises = serialJsonRequest(requests);
    console.log('JSONPromises');
    console.log(JSONPromises);


    Promise.all(JSONPromises)
   // fetchJsonp(request)
      .then((responsesArray) => {
        //
         console.log('serial response?');
         console.log(responsesArray);
        for (let response of responsesArray) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
        }
        dispatch(itemsIsLoading(false));
        return responsesArray;
      })
      .then((responsesArray) => {
        const jsonedArray = [];
        for (let record of responsesArray) {
          jsonedArray.push(record.json())
        }
        console.log(jsonedArray);
        return Promise.all(jsonedArray)
      })
      .then((jsonedArray) => {
        console.log('JSONED');

        const reducedArray = [];
        for (let record of jsonedArray) {
          if (record.total === 0){ // No record data on DEEZER
            // @TODO: Add data from request
            reducedArray.push(
              {
                artist: {
                  name: 'Unknown'
                },
                album: {
                  title: 'Unknown'
                },
                title: 'Unknown',
                cover_xl: 'Unknown',
              }
            )
          }
          else{
            reducedArray.push(record.data[0])
          }
        }
        console.log('r e d u c e d');
        console.log(reducedArray);
        return reducedArray
      })
      .then((reducedArray) => {

        const items = [];
        for (let record of reducedArray) {
          items.push({
            artist: record.artist.name,
            title: record.album.title,
            track: record.title,
            cover_xl: record.album.cover_xl,
          });
        }
        return items;
      })
      .then((items) =>
        dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };

}
