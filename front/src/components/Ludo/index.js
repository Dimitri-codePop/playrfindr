import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FindGoodGameByName, FindGoodGame } from 'src/selectors/find';
import Flash from 'src/components/Flash';
import './style.scss';

export default function Ludo({ user, game, games, deleteGameFromLib, message, isOk, showMessage, setShowMessage}) {
  const [profilGames, setProfilGames] = useState([]);

  const handleOnClick = (event) => {
    const gameName = FindGoodGame(games, event.target.id)
    deleteGameFromLib(event.target.id, gameName.label);
  }

  useEffect(() => {
    if (game) {const gameList = game.map((obj) => {
      console.log(obj);
      const oneGame = FindGoodGameByName(games, obj);
      console.log(oneGame);
      const path = `/jeu/${oneGame.id}`;
      return (
        <div className="profil__ludo__games__content">
            <Link  to={path} >
              <img className="profil__ludo__games__pic" src={oneGame.picture} alt="Game" />
            </Link>
            <div className="profil__ludo__games__name">
              <button type="button" id={oneGame.id} onClick={handleOnClick} className="profil__delete-btn">
                <FontAwesomeIcon className="profil__delete no-pointer" icon={faTimes} />
              </button>
            <p className="profil__ludo__games__name-title">{oneGame.label}</p>
            </div>
          </div>
      );
    });
    setProfilGames(gameList);
    };
  }, [game]);


  return (
    <>
      <Flash
        message={message}
        isOk={isOk}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      />
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
    </>
  );
}

Ludo.propTypes = {};
