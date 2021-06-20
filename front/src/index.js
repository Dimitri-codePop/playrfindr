import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from 'src/containers/App';
import Admin from 'src/containers/Admin';
import store from 'src/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/:id">
          <Admin />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
