import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
      return (
        <div className="profil__ludo__games__content">
          <img className="profil__ludo__games__pic" src={oneGame.picture} alt="Game" />
          <p className="profil__ludo__games__name">{oneGame.label}</p>
        </div>
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
