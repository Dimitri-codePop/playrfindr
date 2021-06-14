import React from 'react'
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { getAge } from 'src/selectors/date';

import './style.scss';

export default function Content({user, id}) {
  const nb = id - 1;
  const {
    firstname,
    picture,
    lastname,
    email,
    birthdate,
    departement,
    theme,
    category
  } = user[nb]

  const age = getAge(birthdate);
  const themes = theme.map((theme) => (
    <div key={theme} className="profil__tag__theme">{theme}</div>
  ))
  const categories = category.map((cat) => (
    <div key={cat} className="profil__tag__cat">{cat}</div>
  ))
  return(
    <div className="profil__section1">
          <img className="profil__image" src={picture}></img>
        <div className="profil__content">
          <div className="profil__name">
            <p className="profil__name__content">{firstname} {lastname}</p>
            <FontAwesomeIcon className="profil__name__envelop" icon={faEnvelope} />
          </div>
          <p className="profil__age">{age} ans</p>
          <p className="profil__email">{email}</p>
          <div className="profil__dpt">
            <p className="profil__dpt__title">Département</p>
            <p className="profil__dpt__content">{departement}</p>
          </div>
          <h2 className="profil__themetitle">Thèmes et catégories préférés</h2>
            <div className="profil__tag">
              {categories}
              {themes}
            </div>
        </div>
    </div>
  );
}

Content.propTypes = {};
