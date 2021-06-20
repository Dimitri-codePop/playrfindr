import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Navbar() {
    return (
    <>
        <h1> Sommaire </h1>
      <NavLink
        exact
        to="/admin/users"
        className="admin__navbar__items"
        activeClassName="admin__navbar__items-active"
        key="users"
      >
        Utilisateurs
      </NavLink>
      <NavLink
        exact
        to="/admin/games"
        className="admin__navbar__items"
        activeClassName="admin__navbar__items-active"
        key="games"
      >
        Jeux
      </NavLink>
      <NavLink
      exact
      to="/admin/departments"
      className="admin__navbar__items"
      activeClassName="admin__navbar__items-active"
      key="departments"
      >
        Départements
      </NavLink>
      <NavLink 
        exact 
        to="/admin/themes"
        className="admin__navbar__items"
        activeClassName="admin__navbar__items-active"
        key="themes"
      >
        Thèmes
      </NavLink>
      <NavLink
        exact
        to="/admin/categories"
        className="admin__navbar__items"
        activeClassName="admin__navbar__items-active"
        key="categories"
      >
        Catégories
      </NavLink>
      <NavLink
        exact
        to="/admin/editors"
        className="admin__navbar__items"
        activeClassName="admin__navbar__items-active"
        key="editors"
      >
        Editeurs
      </NavLink>
      <NavLink 
        exact 
        to="/admin/events"
        className="admin__navbar__items"
        activeClassName="admin__navbar__items-active"
        key="events"
      >
        Evénements
      </NavLink>
    </>
);
}

Navbar.propTypes = {

};
