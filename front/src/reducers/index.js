import { combineReducers } from 'redux';

import userReducer from './user';
import gamesReducer from './games';
import eventsReducer from './events';
import systemMessagesReducer from './systemMessages';

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  events: eventsReducer,
  systemMessages: systemMessagesReducer,
});

export default rootReducer;
