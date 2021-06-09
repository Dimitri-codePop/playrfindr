import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Profil from 'src/containers/Profil';

import './style.scss';

function App() {

  return (
    <div className="app">
      <Switch>
        <Route path="/profil/:id">
          <Profil />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
