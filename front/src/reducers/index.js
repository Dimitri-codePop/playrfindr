import { combineReducers } from 'redux';

import userReducer from './user';
import gamesReducer from './games';
import eventsReducer from './events';
import systemMessagesReducer from './systemMessages';
import searchReducer from './search';
import messagesReducer from './messages';
import adminReducer from './admin';


const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  events: eventsReducer,
  systemMessages: systemMessagesReducer,
  search: searchReducer,
  messages: messagesReducer,
  admin: adminReducer,
});

export default rootReducer;
