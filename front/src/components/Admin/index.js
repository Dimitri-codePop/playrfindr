import React, { useEffect, useState } from 'react';
import { Switch, Route, Navlink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Flash from 'src/components/Flash';

import Navbar from './Navbar';
import Jeux from './Content/Jeux';
import Users from './Content/Users';
import Categories from './Content/Categories';
import Themes from './Content/Themes';
import Events from './Content/Events';
import Authors from './Content/Authors';
import Editors from './Content/Editors';
import './style.scss';

export default function Admin(
  {
    loadTypes,
    loadUsers,
    loadEditors,
    loadAuthors,
    games,
    categories,
    themes,
    users,
    events,
    editors,
    authors,
    deleteElement,
    addElementType,
  },
) {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    loadUsers();
    loadTypes();
    loadEditors();
    loadAuthors();
  }, []);
  return (
    <div className="admin">
      <div className="admin__nav">
        <Navbar />
      </div>
      <div className="admin__content">
        <Flash
          // message={message}
          // isOk={isOk}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        />
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
            <Users
              users={users}
              deleteElement={deleteElement}
            />
          </Route>
          <Route
            exact
            path="/admin/games"
          >
            <Jeux
              games={games}
              deleteElement={deleteElement}
            />
          </Route>
          <Route
            exact
            path="/admin/themes"
          >
            <Themes
              themes={themes}
              deleteElement={deleteElement}
              addElementType={addElementType}
            />
          </Route>
          <Route
            exact
            path="/admin/categories"
          >
            <Categories
              categories={categories}
              deleteElement={deleteElement}
              addElementType={addElementType}
            />
          </Route>
          <Route
            exact
            path="/admin/editors"
          >
            <Editors
              editors={editors}
              deleteElement={deleteElement}
              addElementType={addElementType}
            />
          </Route>
          <Route
            exact
            path="/admin/authors"
          >
            <Authors authors={authors} deleteElement={deleteElement} />
          </Route>
          <Route
            exact
            path="/admin/events"
          >
            <Events events={events} deleteElement={deleteElement} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

Admin.propTypes = {
  loadTypes: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  loadEditors: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired,
  addElementType: PropTypes.func.isRequired,

  games: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  themes: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  editors: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};
