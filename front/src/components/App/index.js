// == Import npm
import React, { useEffect } from 'react';

// == Import
import NavBar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Home from 'src/containers/Home'
import Jeux from 'src/containers/Jeux';
import Jeu from 'src/containers/Jeu';
import Profil from 'src/containers/Profil';
import Events from 'src/containers/Events';
import Proptypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import './style.scss';
import Loading from './Loading';

// == Composant
export default function App({
  topConnect, 
  loadTypes, 
  loading,
}) {

useEffect(() => {
topConnect();
loadTypes();
}, []);

if (loading) {
  return <Loading />;
}

return (
  <div className="app">
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route 
        exact
        path="/jeux">
        <Jeux />
      </Route>
      <Route 
        path="/jeu/:id">
        <Jeu />
      </Route>
      <Route path="/profil/:id">
        <Profil />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
    </Switch>
    <Footer />
  </div>
);
}

App.propTypes = {
topConnect: Proptypes.func.isRequired,
loadTypes: Proptypes.func.isRequired,
loading: Proptypes.bool.isRequired,
};
