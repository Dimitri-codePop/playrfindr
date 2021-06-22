import React, { useEffect } from 'react';
import { Switch, Route, Navlink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Jeux from './Content/Jeux';
import Users from './Content/Users';
import Departments from './Content/Departments';
import Categories from './Content/Categories';
import Themes from './Content/Themes';
import Events from './Content/Events';
import Authors from './Content/Authors';
import Editors from './Content/Editors';
import './style.scss';

export default function Admin(
  {
    loadTypes,
    loadDepartements,
    loadUsers,
    loadEvents,
    loadEditors,
    games,
    categories,
    themes,
    users,
    events,
    editors,
    authors,
    departments,
  },
) {
  useEffect(() => {
    loadUsers();
    loadTypes();
    loadDepartements();
    loadEvents();
    loadEditors();
  }, []);
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
            <Users users={users} />
          </Route>
          <Route
            exact
            path="/admin/games"
          >
            <Jeux games={games} />
          </Route>
          <Route
            exact
            path="/admin/departments"
          >
            <Departments departments={departments} />
          </Route>
          <Route
            exact
            path="/admin/themes"
          >
            <Themes themes={themes} />
          </Route>
          <Route
            exact
            path="/admin/categories"
          >
            <Categories categories={categories} />
          </Route>
          <Route
            exact
            path="/admin/editors"
          >
            <Editors editors={editors} />
          </Route>
          <Route
            exact
            path="/admin/authors"
          >
            <Authors authors={authors} />
          </Route>
          <Route
            exact
            path="/admin/events"
          >
            <Events events={events} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

Admin.propTypes = {
  loadTypes: PropTypes.func.isRequired,
  loadDepartements: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  loadEvents: PropTypes.func.isRequired,
  loadEditors: PropTypes.func.isRequired,
  games: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  themes: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
  editors: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  departments: PropTypes.object.isRequired,
};
