import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import auth from 'src/middlewares/auth';
import types from 'src/middlewares/types';
import onegame from 'src/middlewares/onegame';
import games from 'src/middlewares/games';
import profil from 'src/middlewares/profil';
import events from 'src/middlewares/events';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(auth, types, games, onegame, events, profil),
);

const store = createStore(reducer, enhancers);

export default store;
