import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Home/Modals/Login/Form/Field';

import './style.scss';

export default function Form({
  onSubmitUserLogin,
  closeModal
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUserLogin();
  };

  return (
    <>
      <button onClick={closeModal}>close</button>
      <form className="form__login" onSubmit={handleSubmit}>
        <Field
          type="email"
          name="email"
          placeholder="Email"
        />
        <Field
          type="text"
          name="firstname"
          placeholder="Prénom"
        />
        <Field
          type="text"
          name="lastname"
          placeholder="Nom de famille"
        />
        <select name="departement" id="departement" className="field__input">
            <option value="">--Choisissez votre département--</option>
            <option value="59">Nord</option>
            <option value="59">Nord</option>
            <option value="59">Nord</option>
            <option value="59">Nord</option>
            <option value="59">Nord</option>
            <option value="59">Nord</option>
        </select>
        <label htmlFor="category"> Vos catégories préférés :</label>
        <select name="category" id="category" className="field__input">
            <option value="">--Choisissez vos catégories--</option>
            <option value="59">Jeux de plateaux</option>
            <option value="59">Jeux de plateaux</option>
            <option value="59">Jeux de plateaux</option>
            <option value="59">Jeux de plateaux</option>
            <option value="59">Jeux de plateaux</option>
            <option value="59">Jeux de plateaux</option>
        </select>
        <label htmlFor="theme"> Vos thèmes préférés :</label>
        <select name="theme" id="theme" className="field__input">
            <option value="">--Choisissez vos thèmes--</option>
            <option value="59">Fantastiques</option>
            <option value="59">Fantastiques</option>
            <option value="59">Fantastiques</option>
            <option value="59">Fantastiques</option>
            <option value="59">Fantastiques</option>
            <option value="59">Fantastiques</option>
        </select>
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
        />
        <Field
          type="password"
          name="passwordConfirm"
          placeholder="Confirmez votre Mot de passe"
        />
        <button type="submit" className="form__login-button">Envoyer</button>
      </form>
    </>
  );
}

Form.propTypes = {
  onSubmitUserLogin: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
