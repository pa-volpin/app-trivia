import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  player: playerReducer,
  tokenObj: tokenReducer,
});
