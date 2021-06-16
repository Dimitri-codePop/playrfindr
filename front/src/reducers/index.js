import { combineReducers } from 'redux';

import userReducer from './user';
import gamesReducer from './games';
import eventsReducer from './events';

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  events: eventsReducer,
});

export default rootReducer;
