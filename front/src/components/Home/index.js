import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAngleDoubleRight
  } from '@fortawesome/free-solid-svg-icons'

import './style.scss';
import accueil from 'src/assets/accueil.png'
export default function Home() {
  return (
    <div className="home">
      <div className="home__accueil__container">
        <img src={accueil} className="home__accueil-img" alt="accueil avec des des et un pion du jeu d'échec" />
        <div className="home__title">
          <span className="">Retrouvez-vous et jouer à vos jeux favoris !</span>
          <span className="home__subtitle">
            PlayRfindR est une plateforme qui facilite la mise en relation de plusieurs 
            jouers afin qu'ils se retrouvent autour d'un jeu de société
          </span>
          <button type="button" className="btn btn-login" id="modal_login">Connexion<FontAwesomeIcon icon={faAngleDoubleRight} /></button>
          <button type="button" className="btn btn-signup" id="modal_signup">Inscription<FontAwesomeIcon icon={faAngleDoubleRight} /></button>
        </div>
      </div>
      <section className="home__top">

      </section>
    </div>
  );
}

Home.propTypes = {

};
