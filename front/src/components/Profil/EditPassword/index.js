import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

export default function EditPassword({
  password,
  passwordConfirm,
  oldPassword,
  changeField,
  handleSubmitEdit,
  isOpen,
  setIsOpen,
}) {
  Modal.setAppElement('#root');

  function closeModal() {
    setIsOpen(!isOpen);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitEdit();
    closeModal();
  };

  const refreshPage = () => {
    window.location.reload();
  };
  const customStyles = {
    content: {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      height                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      zIndex                : '1000',
    },
  };

  return (
    <Modal
      onRequestClose={closeModal}
      bodyOpenClassName="Edit Password"
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Inscription"
    >
      <button onClick={refreshPage} type="button">
        <FontAwesomeIcon className="no-pointer" icon={faTimes} />
      </button>
      <form className="form__login" onSubmit={handleSubmit}>
        <Field
          type="password"
          name="password"
          placeholder="Nouveau Mot de Passe"
          onChange={changeField}
          value={password}
        />
        <Field
          type="passwordConfirm"
          name="passwordConfirm"
          placeholder="Confirmez le nouveau Mot de Passe"
          onChange={changeField}
          value={passwordConfirm}
        />
        <Field
          type="oldPassword"
          name="oldPassword"
          placeholder="Entrez votre Ancien Mot de Passe"
          onChange={changeField}
          value={oldPassword}
        />
        <button type="submit" className="form__login-button">Envoyer</button>
        <button onClick={refreshPage} type="button">
          Annuler
          <FontAwesomeIcon className="no-pointer" icon={faTimes} />
        </button>
      </form>
    </Modal>
  );
}

EditPassword.propTypes = {
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  oldPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSubmitEdit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
