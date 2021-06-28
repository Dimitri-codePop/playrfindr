import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUsers, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import Loading from 'src/components/Loading'
import Flash from 'src/components/Flash';
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
    editor,
    loading,
    addGameToLib,
    message,
    isOk,
    firstname,
    lastname,
    showMessage,
    setShowMessage,
}) {


  if (loading) {
    return <Loading />;
  }
  const themes = theme_all.map((theme) => (
    <div key={theme} className="game__tag__theme">{theme}</div>
  ));
  const categories = category_all.map((cat) => (
    <div key={cat} className="game__tag__cat">{cat}</div>
  ));
const handleOnClick = () => {
  addGameToLib()
  setShowMessage(!showMessage);
}
  return(
    <>
      <div className="game__section1">
      <Flash
        message={message}
        isOk={isOk}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      />
        <img className="game__image" src={picture}></img>
        <div className="game__content">
          <div className="game__name">
            <p className="game__name__content">{label}</p>
            <div className="game__name__editors">
            <p className="game__name__content-subtitle">{editor}</p>
            <p className="game__name__content-subtitle">{firstname[0]} {lastname[0]}</p>
            </div>
            
            <div className="game__name__add">
              <a href="#" className="game__name__add--text" onClick={handleOnClick}>
                Ajouter ce jeu à ma Ludothèque 
              <FontAwesomeIcon className="" icon={faChevronCircleRight} />
                </a>
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
    </>
  );
}

Content.propTypes = {
  addGameToLib: PropTypes.func.isRequired,
};
