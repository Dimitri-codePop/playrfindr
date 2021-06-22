import { combineReducers } from 'redux';

import userReducer from './user';
import gamesReducer from './games';
import eventsReducer from './events';
import systemMessagesReducer from './systemMessages';
import searchReducer from './search';


const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  events: eventsReducer,
  systemMessages: systemMessagesReducer,
  search: searchReducer,
});

export default rootReducer;
