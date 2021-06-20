import React, { useEffect } from 'react';
import { Switch, Route, Navlink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Jeux from './Content/Jeux';
import './style.scss';

export default function Admin(  
  { 
    loadTypes,
    loadDepartements,
    loadUsers,
    games,
    categories,
    themes,
    users,
    events,
    editors,

  }) {
  useEffect(() => {
    loadUsers();
    loadTypes();
    loadDepartements();
  }, [])
  return (
<div className="admin">
  <div className="admin__nav">
    <Navbar />
  </div>
  <div className="admin__content">
  <Switch>

    <Route 
      exact
      path="/admin/home"
    >
      Home Admin
    </Route>
    <Route 
      exact
      path="/admin/users"

      key="users"
    >
      Utilisateurs
    </Route>
    <Route
      exact
      path="/admin/games"
    >
      <Jeux games={games}/>
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
  </div>
</div>
);
}

Admin.propTypes = {

};
