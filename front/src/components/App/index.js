// == Import npm
import React, { useEffect, useState } from 'react';
// == Import
import NavBar from 'src/containers/Navbar';
import Footer from 'src/components/Footer';
import Home from 'src/containers/Home';
import Jeux from 'src/containers/Jeux';
import Jeu from 'src/containers/Jeu';
import Profil from 'src/containers/Profil';
import Events from 'src/containers/Events';
import Search from 'src/containers/Search';
import Messages from 'src/containers/Messages';
import PropTypes from 'prop-types';

import { Switch, Route, Redirect } from 'react-router-dom';
import 'src/styles/index.scss';

import './style.scss';
import Loading from './Loading';
import About from '../About';
import Cgu from '../CGU';
import Faq from '../Faq';
// == Composant
export default function App({
  topConnect,
  loadTypes,
  loading,
  loadDepartements,
  loadUser,
  isLogged,
}) {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    loadUser();
    topConnect();
    loadTypes();
    loadDepartements();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <NavBar
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      />
      <Switch>
        <Route exact path="/">
          <Home
            showMessage={showMessage}
            setShowMessage={setShowMessage}
          />
        </Route>
        <Route
          exact
          path="/jeux"
        >
          <Jeux />
        </Route>
        <Route
          path="/jeu/:id"
        >
          <Jeu
            showMessage={showMessage}
            setShowMessage={setShowMessage}
          />
        </Route>
        <Route path="/profil/:id">
          {isLogged
            ? (
              <Profil
                showMessage={showMessage}
                setShowMessage={setShowMessage}
              />
            ) : <Redirect to="/" />}
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/recherche">
          <Search />
        </Route>
        <Route path="/messagerie">
          <Messages />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/cgu">
          <Cgu/>
        </Route>
        <Route path="/faq">
          <Faq/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  topConnect: PropTypes.func.isRequired,
  loadTypes: PropTypes.func.isRequired,
  loadDepartements: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
