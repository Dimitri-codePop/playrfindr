import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBars, 
  faChessKnight, 
  faCalendarDay, 
  faUser,
  faSearch,
  } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

export default function Mobile({ handleNavBarSearch, userId, isLogged, handleDisconnect }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(true);
  const [navBarSearchValue, setNavBarSearchValue] = useState('');
  const toggleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleSearchBar = () => {
    setToggleSearch(!toggleSearch);
  };

  const changeField = (event) => {
    event.preventDefault();
    console.log('ici la touche', event.target.value)
    setNavBarSearchValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('la recherche suivante se fait : ', event.target[0].value);
    handleNavBarSearch(event.target[0].value);
  }
  const profilPath= `/profil/${userId}`
  const classnames = toggleMenu ? 'navbar__list' : 'navbar__list navbar__list-ishidden';
  return (
  <nav className="navbar">
    <FontAwesomeIcon icon={faBars} onClick={toggleNavbar} className="navbar__toggler" />
    <ul className={classnames}>  
      <NavLink
        className="navbar__items"
        activeClassName="navbar__items-active"
        onClick={toggleNavbar}
        exact
        to="/jeux"
        key="jeux"
      >
      <FontAwesomeIcon icon={faChessKnight} />  Tous les jeux
      </NavLink>
      {isLogged && (
        <>
          <NavLink
            className="navbar__items"
            activeClassName="navbar__items-active"
            onClick={toggleNavbar}
            exact
            to="/events"
            key="Event"
          >
            <FontAwesomeIcon icon={faCalendarDay} />   Event
          </NavLink>
          <NavLink
            className="navbar__items"
            activeClassName="navbar__items-active"
            onClick={toggleNavbar}
            exact
            to= {profilPath}
            key="profil"
          >
            <FontAwesomeIcon icon={faUser} />  Mon Profil
          </NavLink>
          <button type="button" className="navbar__items" onClick={handleDisconnect} >
            <FontAwesomeIcon icon={faUser} />  Déconnexion
          </button>
          </>
        )}  
    </ul>
      {toggleSearch ? (
        <>
          <h1 className="navbar__title">
            <Link
              to="/"
              key="Accueil"
              onClick={() => {setToggleMenu(false)}}
            >
              <span> 
                Playr 
              </span>
              <span>
                Findr
              </span>
            </Link>
          </h1>
        </>
        ) : (
          <form onSubmit={handleSubmit} className="navbar__search-form">
            <fieldset>
              <legend>Rechercher</legend>
              <input
                type="text"
                name="search"
                className="navbar__search-form--input"
                placeholder="Entrez votre recherche"
                onChange={changeField}
                value={navBarSearchValue}>
              </input>
              <button type="submit" className="navbar__search-form-button"><FontAwesomeIcon icon={faSearch} className=""/> </button>
            </fieldset>
          </form>
        )}
    <FontAwesomeIcon icon={faSearch} onClick={toggleSearchBar} className="navbar__search" />
  </nav>
);
}

Mobile.propTypes = {
  handleNavBarSearch: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
};
