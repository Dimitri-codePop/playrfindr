import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import auth from 'src/middlewares/auth';
import types from 'src/middlewares/types';
import onegame from 'src/middlewares/onegame';
import games from 'src/middlewares/games';
import profil from 'src/middlewares/profil';
import events from 'src/middlewares/events';
import search from 'src/middlewares/search';
import messages from 'src/middlewares/messages';
import admin from 'src/middlewares/admin';
import checkTokenExpirationMiddleware from 'src/middlewares/checkTokenExpirationMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(auth,
    types,
    games,
    onegame, events,
    profil,
    search,
    messages,
    admin,
    checkTokenExpirationMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
