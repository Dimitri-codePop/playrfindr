// == Import npm
import React, { useEffect } from 'react';

// == Import
import NavBar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Home from 'src/containers/Home'
import Jeux from 'src/containers/Jeux';
import Jeu from 'src/containers/Jeu';
import Profil from 'src/containers/Profil';

import { Switch, Route } from 'react-router-dom';
import './style.scss';
import Loading from './Loading';
import PropTypes from 'prop-types';
// == Composant
export default function App({
  topConnect, 
  loadTypes, 
  loading,
  loadDepartements,
}) {

useEffect(() => {
topConnect();
loadTypes();
loadDepartements();
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
    </Switch>
    <Footer />
  </div>
);
}

App.protoTypes = {
topConnect: PropTypes.func.isRequired,
loadTypes: PropTypes.func.isRequired,
loadDepartements: PropTypes.func.isRequired,
loading: PropTypes.bool.isRequired,
};
