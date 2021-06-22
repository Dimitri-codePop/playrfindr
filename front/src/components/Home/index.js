import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from 'src/components/Home/Modals/Login';
import Signup from 'src/components/Home/Modals/Signup';
import Flash from 'src/components/Flash';

import {
  faAngleDoubleRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import accueil from 'src/assets/accueil.png';
import Card from './Card';
import './style.scss';

// import games from '../../data/game';

export default function Home({
  topTendances,
  message,
  isOk,
  showMessage,
  setShowMessage,
}) {
  const [loginIsHidden, setLoginIsHidden] = useState(false);
  const [signupIsHidden, setSignupIsHidden] = useState(false);
  const handleModalLogin = () => {
    setLoginIsHidden(!loginIsHidden);
  };
  const handleModalSignup = () => {
    setSignupIsHidden(!signupIsHidden);
  };

  const gameList = topTendances.map((game, i) => {
    return (<Card 
      star={faStar}
      number= {i+1}
      id={game.id}
      label={game.label}
      picture={game.picture}
      key={game.label}
    />)
  });
  return (
    <div className="home">
      <Flash
        message={message}
        isOk={isOk}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      />
      <div className="home__accueil__container">
        <img src={accueil} className="home__accueil-img" alt="accueil avec des des et un pion du jeu d'échec" />
        <div className="home__title">
          <span className="home__title--content">Retrouvez-vous et jouer à vos jeux favoris !</span>
          <span className="home__subtitle">
            PlayRfindR est une plateforme qui facilite la mise en relation de plusieurs 
            jouers afin qu'ils se retrouvent autour d'un jeu de société
          </span>
          <button type="button" onClick={handleModalLogin} className="btn btn-login" id="modal_login">Connexion<FontAwesomeIcon icon={faAngleDoubleRight} /></button>
          <button type="button" onClick={handleModalSignup} className="btn btn-signup" id="modal_signup">Inscription<FontAwesomeIcon icon={faAngleDoubleRight} /></button>
        </div>
      </div>
      <section className="home__top">
        <div className="home__top-container">
          <h2 className="home__top-title">Les jeux tendances :</h2>
          <div className="home__top-cards">
              {gameList}
          </div>
        </div>
      </section>
      {loginIsHidden && (
      <Login
        loginIsHidden={loginIsHidden}
        setLoginIsHidden={setLoginIsHidden}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      />
      )}
      {signupIsHidden && (
      <Signup
        signupIsHidden={signupIsHidden}
        setSignupIsHidden={setSignupIsHidden}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      />
      )}
    </div>
  );
}

Home.propTypes = {
  topTendances: PropTypes.array,
};

Home.defaultProps = {
  topTendances: [],
};
