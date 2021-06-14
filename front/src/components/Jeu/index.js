import React from 'react'
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClock} from '@fortawesome/free-solid-svg-icons'

import './style.scss';

export default function Jeu({game}) {
  const {
    label,
    duration,
    picture,
    player_min,
    player_max,
    year,
    describe,
    theme,
    category,
    author,
    editor
  } = game

  const themes = theme.map((theme) => (
    <div key={theme} className="game__tag__theme">{theme}</div>
  ))
  const categories = category.map((cat) => (
    <div key={cat} className="game__tag__cat">{cat}</div>
  ))
  return(
    <div className="game__section1">
        <img className="game__image" src={picture}></img>
        <div className="game__content">
          <div className="game__name">
            <p className="game__name__content">{label}</p>
            <div className="game__name__add">
              <p className="game__name__add--text">Ajouter ce jeu à ma Ludothèque</p>
              <FontAwesomeIcon className="game__name__add--icon" icon={faPlus} />
            </div>
          </div>
          <p className="game__age">{year}</p>
          <p className="game__duration">
            {duration}' 
            <FontAwesomeIcon className="game__name__add--icon" icon={faClock} />
          </p>
          <div className="game__dpt">
            <p className="game__dpt__title">Description</p>
            <p className="game__dpt__content"></p>
          </div>
          <h2 className="game__themetitle">Thèmes et catégories de {label}</h2>
            <div className="game__tag">
              {categories}
              {themes}
            </div>
        </div>
    </div>
  );
}

Jeu.propTypes = {};
