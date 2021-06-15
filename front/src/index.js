import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from 'src/containers/App';
import store from 'src/store';
import { BrowserRouter } from 'react-router-dom';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
