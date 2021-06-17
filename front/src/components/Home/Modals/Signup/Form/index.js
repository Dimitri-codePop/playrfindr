import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Home/Modals/Signup/Form/Field';

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
    console.log(event.target.value, event.target.name )
    changeSelectField(Number(event.target.value), event.target.name)
  }
  return (
    <>
      <button type="button" onClick={closeModal}>close</button>
      <form className="form__login" onSubmit={handleSubmit}>
        <Field
          type="email"
          name="email"
          placeholder="Email"
          onChange={changefieldSignup}
          value={email}
        />
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
        <Field
          type="date"
          name="birthdate"
          placeholder="Date de naissance"
          onChange={changefieldSignup}
          value={birthdate}
        />
        <select name="departement" id="departement" onChange={handlechangeSelect} className="field__input">
          <option value="">--Choisissez votre département--</option>
          {listDepartements}
        </select>
        <label htmlFor="categories"> Vos catégories préférés :</label>
        <select name="categories" id="categories" onChange={handlechangeSelect} className="field__input">
          <option value="">--Choisissez vos catégories--</option>
          {listCategories}
        </select>
        <label htmlFor="themes"> Vos thèmes préférés :</label>
        <select name="themes" id="theme" onChange={handlechangeSelect} className="field__input">
          <option value="">--Choisissez vos thèmes--</option>
          {listThemes}
        </select>
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={changefieldSignup}
          value={password}
        />
        <Field
          type="password"
          name="passwordConfirm"
          placeholder="Confirmez votre Mot de passe"
          onChange={changefieldSignup}
          value={passwordConfirm}
        />
        <button type="submit" className="form__login-button">Envoyer</button>
      </form>
    </>
  );
}

Form.propTypes = {
  handleSignup: PropTypes.func.isRequired,
  changefieldSignup: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  categories: PropTypes.array,
  themes: PropTypes.array,
  departements: PropTypes.array,
  closeModal: PropTypes.func.isRequired,
  selectCat: PropTypes.array,
  selectThemes: PropTypes.array,
  departement: PropTypes.array,
  changeSelectField: PropTypes.func.isRequired,
  birthdate: PropTypes.string.isRequired,
};

Form.defaultProps = {
  departements: [],
  departement: [],
  selectCat: [],
  selectThemes: [],
  categories: [],
  themes: [],
};
