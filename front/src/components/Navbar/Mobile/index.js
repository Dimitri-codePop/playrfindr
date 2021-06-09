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

export default function Mobile({ handleNavBarSearch }) {
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

  const classnames = toggleMenu ? 'navbar__list' : 'navbar__list navbar__list-ishidden';
  return (
  <div className="navbar">
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
      <NavLink
        className="navbar__items"
        activeClassName="navbar__items-active"
        onClick={toggleNavbar}
        exact
        to="/event"
        key="Event"
      >
        <FontAwesomeIcon icon={faCalendarDay} />   Event
      </NavLink>
      <NavLink
        className="navbar__items"
        activeClassName="navbar__items-active"
        onClick={toggleNavbar}
        exact
        to="/profil/:id"
        key="profil"
      >
        <FontAwesomeIcon icon={faUser} />  Mon Profil
      </NavLink>
    </ul>
    <h1 className="navbar__title">
      {toggleSearch ? (
        <>
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
        </>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="Entrez votre recherche"
              onChange={changeField}
              value={navBarSearchValue}></input>
          </form>
        )}
    </h1>
    <FontAwesomeIcon icon={faSearch} onClick={toggleSearchBar} className="navbar__search" />
  </div>
);
}

Mobile.propTypes = {
  handleNavBarSearch: PropTypes.func.isRequired,
};
