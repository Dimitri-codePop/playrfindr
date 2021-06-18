import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Home/Modals/Login/Form/Field';

import './style.scss';

export default function Form({
  handleLogin,
  closeModal,
  changeField,
  email,
  password,
  showMessage,
  setShowMessage,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    closeModal();
    setShowMessage(!showMessage);
    //setLoginIsHidden(!loginIsHidden)
  };

  return (
    <>
      <button onClick={closeModal}>close</button>
      <form className="form__login" onSubmit={handleSubmit}>
        <Field
          type="email"
          name="email"
          placeholder="Email"
          onChangeValue={changeField}
          value={email}
        />
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChangeValue={changeField}
          value={password}
        />
        <button type="submit" className="form__login-button">Envoyer</button>
      </form>
    </>
  );
}

Form.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
