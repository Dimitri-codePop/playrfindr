import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getAge } from 'src/selectors/date';
import './style.scss';

export default function Content({ user, paramsId}) {
  const [currentUser, setCurrentUser] = useState(true);
  const {
    theme,
    category,
    firstname,
    picture,
    lastname,
    email,
    birthdate,
    department,
    id,
  } = user;

  const themes = theme.map((obj) => (
    <div key={obj} className="profil__tag__theme">{obj}</div>
  ));
  const age = getAge(birthdate);
  const categories = category.map((cat) => (
    <div key={cat} className="profil__tag__cat">{cat}</div>
  ))

  // A GERER PLUS TARD POUR L'EDIT
  useEffect(() => {
    if (user.id === paramsId) {
      setCurrentUser(true);
    } else {
      setCurrentUser(false);
    }
  }, []);
  // END GESTION EDIT
  return (
    <>
      <div className="profil__section1">
        <img className="profil__image" src={picture} alt="profil of user" />
        <div className="profil__content">
          <div className="profil__name">
            <p className="profil__name__content">{firstname} {lastname}</p>
            <FontAwesomeIcon className="profil__name__envelop" icon={faEnvelope} />
          </div>
          <p className="profil__age">{age} ans</p>
          <p className="profil__email">{email}</p>
          <div className="profil__dpt">
            <p className="profil__dpt__title">Département</p>
            <p className="profil__dpt__content">{department}</p>
          </div>
          <h2 className="profil__themetitle">Thèmes et catégories préférés</h2>
          <div className="profil__tag">
            <div>
              {categories}
            </div>
            <div>
              {themes}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Content.propTypes = {
  user: PropTypes.object.isRequired,
  paramsId: PropTypes.number.isRequired,
};
