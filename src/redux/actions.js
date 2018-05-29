import promiseMiddleware from 'redux-promise';

export const increaseAction = {
  type: 'INCREASE',
};

export const parsePlaylist = (unformattedInput) => ({
  type: 'PARSE_PLAYLIST',
  unformattedInput
});
