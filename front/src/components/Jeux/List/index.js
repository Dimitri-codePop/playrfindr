import React from 'react'
import Proptypes from 'prop-types'
import gamesData from 'src/data/game';
import { Link } from 'react-router-dom';

import './style.scss';

export default function List() {

  const games = gamesData.game;
  const gameItem = games.map((game) => (
          <article className="card">
            <img className="card-img" src={game.picture} alt={game.label} />
            <div className="card-content">
            <h2 className="card-title">{game.label}</h2>
            </div>
            <Link
              className="card-link"
              to={`/jeu/${game.id}`}
            >
              Détails
            </Link>
          </article>
  ));

  return(
      <div className="games__list">
        <h1 className="games__list--title">Tout les jeux</h1>
        <div className="games__list--cards">
          {gameItem}
        </div>
      </div>
  );
}

List.propTypes = {};
