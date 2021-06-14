import { combineReducers } from 'redux';

import userReducer from './user';
import gamesReducer from './games';

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
});

export default rootReducer;
