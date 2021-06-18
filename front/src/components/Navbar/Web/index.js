import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

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
}) {
  const [navBarSearchValue, setNavBarSearchValue] = useState('');
  const history = useHistory();
  const handleOnClick = () => {
    handleDisconnect();
    setShowMessage(!showMessage);
   // setTimeout(() => setShowMessage(!showMessage), 1000);
    history.push('/');
  };

  const changeField = (event) => {
    event.preventDefault();
    setNavBarSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('la recherche suivante se fait : ', event.target[0].value);
    handleNavBarSearch(event.target[0].value);
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
              value={navBarSearchValue}
            />
            <button type="submit" className="navbar__search-form-button"><FontAwesomeIcon icon={faSearch} className="" /> </button>
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
  userId: PropTypes.number,
  isLogged: PropTypes.bool.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
};

Web.defaultProps = {
  userId: 0,
};
