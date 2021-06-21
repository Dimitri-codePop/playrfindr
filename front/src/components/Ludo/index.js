import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FindGoodGameByName } from 'src/selectors/find';
import './style.scss';

export default function Ludo({ user, games }) {
  const [profilGames, setProfilGames] = useState([]);
  useState(() => {
    const { game } = user;
    console.log(game);
    if (game) {const gameList = game.map((obj) => {
      console.log(obj);
      const oneGame = FindGoodGameByName(games, obj);
      console.log(oneGame);
      const path = `/jeu/${oneGame.id}`;
      return (
        <Link className="profil__ludo__games__content" to={path} >
          <div >
            <img className="profil__ludo__games__pic" src={oneGame.picture} alt="Game" />
            <div className="profil__ludo__games__name">
            <FontAwesomeIcon className="profil__delete no-pointer" icon={faTimes} />
            <p className="profil__ludo__games__name-title">{oneGame.label}</p>
            </div>
          </div>
        </Link>
      );
    });
    setProfilGames(gameList);
    };
  }, []);
  console.log(profilGames);
  return (
    <div className="profil__section2">
      <div className="profil__ludo__title">
        <h3 className="profil__ludo__title__content">Jeux dans sa ludothèque</h3>
        <input type="text" className="profil__ludo__title__search" placeholder="rechercher..."/>
      </div>
      <div className="profil__ludo__games">
        {profilGames}
      </div>
      <FontAwesomeIcon className="profil__plus" icon={faPlus} />
    </div>
  );
}

Ludo.propTypes = {};
