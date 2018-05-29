import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './albumsReducers';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});
