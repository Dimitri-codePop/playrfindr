// == Import npm
import React from 'react';
// == Import
import NavBar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home'
import Profil from 'src/containers/Profil';
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
      <Route path="/profil/:id">
        <Profil />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
