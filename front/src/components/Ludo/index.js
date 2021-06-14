import React from 'react'
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './style.scss';

export default function Ludo() {
  return(
    <div className="profil__section2">
          <div className="profil__ludo__title">
            <h3 className="profil__ludo__title__content">Jeux dans sa ludothèque</h3>
            <input type="text" className="profil__ludo__title__search" placeholder="rechercher..."/>
          </div>
          <div className="profil__ludo__games">
            <div className="profil__ludo__games__content">
              <img className="profil__ludo__games__pic" src="https://www.le-passe-temps.com/23091-thickbox_default/cryptide.jpg" ></img>
              <p className="profil__ludo__games__name">Jeu 1</p>
            </div>
            <div className="profil__ludo__games__content">
              <img className="profil__ludo__games__pic" src="https://www.le-passe-temps.com/23091-thickbox_default/cryptide.jpg" ></img>
              <p className="profil__ludo__games__name">Jeu 1</p>
            </div>
            <div className="profil__ludo__games__content">
              <img className="profil__ludo__games__pic" src="https://www.le-passe-temps.com/23091-thickbox_default/cryptide.jpg" ></img>
              <p className="profil__ludo__games__name">Jeu 1</p>
            </div>
            <div className="profil__ludo__games__content">
              <img className="profil__ludo__games__pic" src="https://www.le-passe-temps.com/23091-thickbox_default/cryptide.jpg" ></img>
              <p className="profil__ludo__games__name">Jeu 1</p>
            </div>
          </div>
            <FontAwesomeIcon className="profil__plus" icon={faPlus} />
      </div>
  );
}

Ludo.propTypes = {};
