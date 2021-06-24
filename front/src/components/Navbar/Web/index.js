import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { tympanus2 } from 'src/selectors/madoka'

import './style.scss';
import Logo from 'src/assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChessKnight,
  faCalendarDay,
  faSearch,
  faTools,
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
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('UserKeysUsed'))){
      const { is_admin } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      is_admin ? setIsAdmin(true) : setIsAdmin(false);
    }
  }, [localStorage.getItem('UserKeysUsed')])
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
  const onClickProfil = () => {
    history.push(profilPath);
  };

  const active = useLocation()
  const classname = (active.pathname =='/jeux') ? "navbar__web__button-active" : "navbar__web__buttons"
  const classname2 = (active.pathname =='/events') ? "navbar__web__button-active" : "navbar__web__buttons"


  tympanus2(window);

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
        {isLogged && 
        <form onSubmit={handleSubmit}>
          <span className="input input--madoka skin-search">
            <input 
              className="input__field input__field--madoka"
              type="text" 
              id="input-32"
              value={search}
              onChange={changeField}
            />
            <label className="input__label input__label--madoka" htmlFor="input-32">
            <svg className="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
              <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
            </svg>
            <span className="input__label-content input__label-content--madoka">Recherche</span>
            </label>
          </span>
        </form>
        }
        {/*<form onSubmit={handleSubmit} className="navbar__search-form">
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
  </form>*/}
        <div className="navbar__web__button-container">
          <Link to="/jeux">
            <button type="button" className={classname}><FontAwesomeIcon icon={faChessKnight} />  Tous les jeux</button>
          </Link>
          {isLogged && (
            <>
              {isAdmin && (<Link to="/admin/home">
                <button type="button" className={classname2}><FontAwesomeIcon icon={faTools} />  Admin</button>
              </Link>)}
              <Link to="/events">
                <button type="button" className={classname2}><FontAwesomeIcon icon={faCalendarDay} />  Evènements</button>
              </Link>
              <Link to={profilPath} onClick={onClickProfil}>
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
