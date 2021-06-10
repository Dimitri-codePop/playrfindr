import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';
import Logo from 'src/assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser,
  faChessKnight, 
  faCalendarDay, 
  faSearch, 
} from '@fortawesome/free-solid-svg-icons'

export default function Web({ handleNavBarSearch }) {
  const [navBarSearchValue, setNavBarSearchValue] = useState('');
  
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

  return (
    <nav className="navbar__web">
      <>
        <Link
          to="/"
          key="Accueil"
          className="navbar__web__logo-container"
        >
          <img src={Logo} alt="logo site web" className="navbar__web__logo"/>
          <h1 className="navbar__web__title">
            <span> PlayR </span>
            <span> FindR </span>
          </h1>
        </Link>
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
      <div className="navbar__web__button-container">
        <Link to="/jeux">
          <button type="button" className="navbar__web__buttons"><FontAwesomeIcon icon={faChessKnight} />  Tous les jeux</button>
        </Link>
        <Link to="/event">
          <button type="button" className="navbar__web__buttons"><FontAwesomeIcon icon={faCalendarDay} />  Evènements</button>
        </Link>
        <Link to="/profil/:id">
          <div className="navbar__web__profil-circle"><FontAwesomeIcon icon={faUser} /></div>
        </Link>
      </div>
      </>
    </nav>
);
}

Web.propTypes = {

};
