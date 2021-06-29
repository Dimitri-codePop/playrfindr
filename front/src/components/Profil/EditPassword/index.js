import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import imageModale from 'src/assets/Imagemodale.png'

export default function EditPassword({
  password,
  passwordConfirm,
  oldPassword,
  changeField,
  handleSubmitEdit,
  isOpen,
  setIsOpen,
  showMessage,
  setShowMessage,
}) {
  Modal.setAppElement('#root');

  function closeModal() {
    setIsOpen(!isOpen);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitEdit();
    closeModal();
    setShowMessage(!showMessage);
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
      isOpen={isOpen}
      className="customStyles"
      contentLabel="Inscription"
    >
    <div className="modal_signup">
      <div className="modal_signup--part1">
        <FontAwesomeIcon onClick={refreshPage} className="modal_signup--close" icon={faTimes} />
        <img className="modal_signup--img" src={imageModale} alt="" />
      </div>
      <div className="modal_signup--part2">
        <form className="modal_signup--form" onSubmit={handleSubmit}>
        <h1 className="modal_signup--titleconnect">Changer le mot de passe</h1>
          <Field
            type="password"
            name="oldPassword"
            placeholder="Entrez votre Ancien Mot de Passe"
            onChange={changeField}
            value={oldPassword}
          />
          <Field
            type="password"
            name="password"
            placeholder="Nouveau Mot de Passe"
            onChange={changeField}
            value={password}
          />
          <Field
            type="password"
            name="passwordConfirm"
            placeholder="Confirmez le nouveau Mot de Passe"
            onChange={changeField}
            value={passwordConfirm}
          />
          
          <div className="form__login-connect">
            <button type="submit" className="form__login-button">Envoyer</button>
          </div>
        </form>
        </div>
      </div>
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
