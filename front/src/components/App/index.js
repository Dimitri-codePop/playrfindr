// == Import npm
import React from 'react';
// == Import
import NavBar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home'
import Jeux from 'src/containers/Jeux';
import Jeu from 'src/containers/Jeu';
import { Switch, Route } from 'react-router-dom';
import './style.scss';

// == Composant
const App = () => (
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
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
