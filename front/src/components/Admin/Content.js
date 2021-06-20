import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './style.scss';

export default function Content() {
  return (
  <Switch>
    <Route
      exact
      to="/admin/users"
      className="navbar__items"
      activeClassName="navbar__items-active"
      key="users"
    >
      Utilisateurs
    </Route>
    <Route
      exact
      path="/admin/games"
    >
      Jeux
    </Route>
    <Route
    exact
    path="/admin/departments"
    >
      Départements
    </Route>
    <Route 
      exact 
      path="/admin/themes"
    >
      Thèmes
    </Route>
    <Route
      exact
      path="/admin/categories"
    >
      Catégories
    </Route>
    <Route
      exact
      path="/admin/editors"
    >
      Editeurs
    </Route>
    <Route 
      exact 
      path="/admin/events"
    >
      Evénements
    </Route>
  </Switch>
);
}

Content.propTypes = {

};
