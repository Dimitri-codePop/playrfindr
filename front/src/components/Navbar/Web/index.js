import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, Redirect } from 'react-router-dom';

import './style.scss';
import Logo from 'src/assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChessKnight,
  faCalendarDay,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default function Web({
  handleNavBarSearch,
  userId,
  isLogged,
  handleDisconnect,
  showMessage,
  setShowMessage,
  handleChangeSearchValue,
  search,
}) {
  const history = useHistory();
  const handleOnClick = () => {
    handleDisconnect();
    setShowMessage(!showMessage);
   // setTimeout(() => setShowMessage(!showMessage), 1000);
    history.push('/');
  };

  const changeField = (event) => {
    event.preventDefault();
    handleChangeSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search[0])
    handleNavBarSearch(search[0]);
    history.push('/recherche');
  };
  const profilPath = `/profil/${userId}`;
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
              value={search}
            />
              <button type="submit" className="navbar__search-form-button"><FontAwesomeIcon icon={faSearch}/> </button>
          </fieldset>
        </form>
        <div className="navbar__web__button-container">
          <Link to="/jeux">
            <button type="button" className="navbar__web__buttons"><FontAwesomeIcon icon={faChessKnight} />  Tous les jeux</button>
          </Link>
          {isLogged && (
            <>
              <Link to="/events">
                <button type="button" className="navbar__web__buttons"><FontAwesomeIcon icon={faCalendarDay} />  Evènements</button>
              </Link>
              <Link to={profilPath}>
                <div className="navbar__web__profil-circle"><FontAwesomeIcon icon={faUser} /></div>
              </Link>
              <button type="button" className="navbar__web__buttons" onClick={handleOnClick}>
                <FontAwesomeIcon icon={faUser} />  Déconnexion
              </button>
            </>
          )}
        </div>
      </>
    </nav>
  );
}

Web.propTypes = {
  handleNavBarSearch: PropTypes.func.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
};

Web.defaultProps = {

};
