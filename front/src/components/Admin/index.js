import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Flash from 'src/components/Flash';
import Themes from 'src/containers/Admin/Content/Themes';
import Categories from 'src/containers/Admin/Content/Categories';
import Editors from 'src/containers/Admin/Content/Editors';
import Authors from 'src/containers/Admin/Content/Authors';
import Jeux from 'src/containers/Admin/Content/Jeux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome
} from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar';
import Users from './Content/Users';
import Events from './Content/Events';
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
    onChangefieldType,
    editElementType,
    addElementAuthor,
    onChangefieldAuthor,
    editElementAuthor,
    onChangefieldGame,
    onChangeSelectField,
    addElementGame,
  },
) {
  const [isAdmin, setIsAdmin] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showModalTheme, setShowModalTheme] = useState(false);
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalGame, setShowModalGame] = useState(false);
  const [showModalEditor, setShowModalEditor] = useState(false);
  useEffect(() => {
    const { is_admin } = JSON.parse(localStorage.getItem('UserKeysUsed'));
    console.log(is_admin);
    is_admin ? (setIsAdmin(true)) : (setIsAdmin(false));
    console.log('use', isAdmin);
  }, []);
  useEffect(() => {
    loadUsers();
    loadTypes();
    loadEditors();
    loadAuthors();
  }, []);
  {/* <Flash
    message={message}
    isOk={isOk}
    showMessage={showMessage}
    setShowMessage={setShowMessage}
  /> */}
  return (
    isAdmin ? (
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
              <Link to="/">
                <button type="button" className="navbar__web__buttons"><FontAwesomeIcon icon={faHome} /> Retour Site</button>
              </Link>
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
                themes={themes}
                categories={categories}
                authors={authors}
                editors={editors}
                deleteElement={deleteElement}
                showModal={showModalGame}
                setShowModal={setShowModalGame}
                onChangefieldGame={onChangefieldGame}
                onChangeSelectField={onChangeSelectField}
                addElementGame={addElementGame}
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
                showModal={showModalTheme}
                setShowModal={setShowModalTheme}
                onChangefieldType={onChangefieldType}
                editElementType={editElementType}
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
                showModal={showModalCategory}
                setShowModal={setShowModalCategory}
                onChangefieldType={onChangefieldType}
                editElementType={editElementType}
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
                showModal={showModalEditor}
                setShowModal={setShowModalEditor}
                onChangefieldType={onChangefieldType}
                editElementType={editElementType}
              />
            </Route>
            <Route
              exact
              path="/admin/authors"
            >
              <Authors
                authors={authors}
                deleteElement={deleteElement}
                addElementAuthor={addElementAuthor}
                editElementAuthor={editElementAuthor}
                onChangefieldAuthor={onChangefieldAuthor}
              />
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
    ) : (<Redirect to="/" />)
  );
}

Admin.propTypes = {
  loadTypes: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  loadEditors: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired,
  addElementType: PropTypes.func.isRequired,
  editElementType: PropTypes.func.isRequired,
  onChangefieldType: PropTypes.func.isRequired,
  addElementAuthor: PropTypes.func.isRequired,
  onChangefieldAuthor: PropTypes.func.isRequired,
  editElementAuthor: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  themes: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  editors: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};
