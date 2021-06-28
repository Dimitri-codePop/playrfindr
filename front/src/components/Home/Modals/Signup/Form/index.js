import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FindGoodTypeLabel, FindGoodTypeId } from 'src/selectors/find'
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import imageModale from 'src/assets/Imagemodale.png'

import './style.scss';

export default function Form({
  changefieldSignup,
  handleSignup,
  email,
  firstname,
  lastname,
  password,
  categories,
  themes,
  birthdate,
  departements,
  departement,
  passwordConfirm,
  selectCat,
  selectThemes,
  changeSelectField,
  closeModal,
  deleteSelectField,
  setLoginIsHidden,
}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup();
    closeModal();
  };
  const listDepartements = departements.map((departement, i) => {
    return (
      <option value={departement.dataValues.id} key={i} >{departement.dataValues.label}</option>
    )
  })
  const listCategories = categories.map((category, i) => {
    return (
      <option value={category.id} key={i} >{category.label}</option>
    )
  });
  const listThemes = themes.map((themes, i) => {
    return (
      <option value={themes.id} key={i} >{themes.label}</option>
    )
  });
  const handlechangeSelect = (event) => {
    changeSelectField(Number(event.target.value), event.target.name)
  }


  const selectCatLabels = selectCat.map((id) => {
    return (
      FindGoodTypeLabel(categories, id)
    )
  });

  const deleteElementClickCat = (event) => {
    const idType = FindGoodTypeId(categories, event.target.id);
    deleteSelectField(idType, "categories")
  }

  const deleteElementClickTheme = (event) => {
    const idType = FindGoodTypeId(themes, event.target.id);
    deleteSelectField(idType, "themes")
  };

  const handleOnLogin = () => {
    setLoginIsHidden(true);
    closeModal();
  };
  
  
  const displayCat = selectCatLabels.map((label) => {
    return (
      <div className="modal_signup--typesresultscat" key={label} onClick={deleteElementClickCat} id={label}>
        <FontAwesomeIcon icon={faTimes} className="delete" />
        <p className="modal_signup--typesresultscat__label">{label}</p>
      </div>
    )
  })

  const selectThemesLabels = selectThemes.map((id) => {
    return (
      FindGoodTypeLabel(themes, id)
    )
  });
  const displayThemes = selectThemesLabels.map((label) => {
    return (
      <div className="modal_signup--typesresultsthemes" key={label} onClick={deleteElementClickTheme} id={label}>
        <FontAwesomeIcon icon={faTimes} className="delete" />
        <p className="modal_signup--typesresultsthemes__label">{label}</p>
      </div>
    )
  })




  return (
    <div className="modal_signup">
      <div className="modal_signup--part1">
      <FontAwesomeIcon onClick={closeModal} className="modal_signup--close" icon={faTimes} />
        <img className="modal_signup--img" src={imageModale} alt=""/>
      </div>
      <div className="modal_signup--part2">
        <form className="modal_signup--form" onSubmit={handleSubmit}>
          <h1 className="modal_signup--title">S'inscrire</h1>
          <div className="modal_signup--name">
          <Field
            type="text"
            name="firstname"
            placeholder="Prénom"
            onChange={changefieldSignup}
            value={firstname}
          />
          <Field
            type="text"
            name="lastname"
            placeholder="Nom de famille"
            onChange={changefieldSignup}
            value={lastname}
          />
          </div>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            onChange={changefieldSignup}
            value={email}
          />
          <div className="modal_signup--pwdate">
            <Field
              type="password"
              name="password"
              placeholder="Mot de passe"
              onChange={changefieldSignup}
              value={password}
            />
            <Field
              type="date"
              name="birthdate"
              placeholder=""
              onChange={changefieldSignup}
              value={birthdate}
            />
          </div>
          <div className="modal_signup--pwdate">
          <Field
            type="password"
            name="passwordConfirm"
            placeholder="Confirmez votre Mot de passe"
            onChange={changefieldSignup}
            value={passwordConfirm}
          />
          <select name="departement" id="departement" onChange={handlechangeSelect} className="field__input--dpt">
              <option value="">Département</option>
              {listDepartements}
          </select>
          </div>

          <div className="modal_signup--types">
            
            <div className="modal_signup--cat">
              <label htmlFor="categories" className="field__input--cattitle"> Vos catégories préférés :</label>
              {(selectCatLabels.length < 3) &&
              <select name="categories" id="categories" onChange={handlechangeSelect} className="field__input--type">
                  <option value="">Choisissez vos catégories</option>
                  {listCategories}
              </select>
              }
              <p className="modal_signup--maxtypes">(max. 3)</p>
              {displayCat}
            </div>
            <div className="modal_signup--themes">
              <label htmlFor="themes" className="field__input--themestitle"> Vos thèmes préférés :</label>
              {(selectThemesLabels.length < 3) &&
              <select name="themes" id="theme" onChange={handlechangeSelect} className="field__input--type">
                  <option value="">Choisissez vos thèmes</option>
                  {listThemes}
              </select>
              }
              <p className="modal_signup--maxtypes">(max. 3)</p>
              {displayThemes}
            </div>
          </div>
          <div className="form__login-inscript">
            <p>J'ai déjà un compte? <span onClick={handleOnLogin}>Je me connecte</span></p>   
            <button type="submit" className="form__login-button">Créer un compte</button>
            <p>En continuant vous accepter les <a href="/cgu" className="form__login-cgu">condition d'utilisation</a> de Playr Findr</p>   
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  changefieldSignup: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  categories: PropTypes.array,
  themes: PropTypes.array,
  departements: PropTypes.array,
  passwordConfirm: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectCat: PropTypes.array,
  selectThemes: PropTypes.array,
  changeSelectField: PropTypes.func.isRequired,
};

Form.defaultProps = {
  departement: [],
  selectCat: [],
  selectThemes: [],
};
