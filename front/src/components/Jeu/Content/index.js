import React from 'react'
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import './style.scss';

export default function Content({
    label,
    duration,
    picture,
    player_min,
    player_max,
    age_min,
    year,
    describe,
    theme_all,
    category_all,
    author,
    editor
}) {

  console.log(`label`, label)


  const themes = theme_all.map((theme) => (
    <div key={theme} className="game__tag__theme">{theme}</div>
  ));
  const categories = category_all.map((cat) => (
    <div key={cat} className="game__tag__cat">{cat}</div>
  ));

  return(
    <div className="game__section1">
      <img className="game__image" src={picture}></img>
      <div className="game__content">
        <div className="game__name">
          <p className="game__name__content">{label}</p>
          <div className="game__name__add">
            <a href="#" className="game__name__add--text">Ajouter ce jeu à ma Ludothèque</a>
          </div>
        </div>
        <p className="game__describe">{describe}</p>
        <div className="game__carac">
          <div className="game__duration">
            <FontAwesomeIcon className="game__duration--icon" icon={faClock} />
            <p className="game__duration--text">{duration}'</p>
          </div>
          <div className="game__nb">
            <FontAwesomeIcon className="game__nb--icon" icon={faUsers} />
            <p className="game__nb--text">{player_min} - {player_max}</p>
          </div>
        </div>
        <div className="game__age">{age_min}+</div>
        <h2 className="game__themetitle">Thèmes et catégories de {label}</h2>
          <div className="game__tag">
            {categories}
            {themes}
          </div>
      </div>
  </div>
  );
}

Content.propTypes = {};
