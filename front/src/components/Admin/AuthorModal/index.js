import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AuthorModal({
  setShowModal,
  showModal,
  firstname,
  lastname,
  addElementAuthor,
  onChangefieldAuthor,
  title,
  authorId,
}) {
  Modal.setAppElement('#root');

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
  function openModal() {
    setShowModal(!showModal);
  }
  function closeModal() {
    setShowModal(!showModal);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(authorId);
    addElementAuthor(authorId);
    closeModal();
    // setShowMessage(!showMessage);
  };
  const placeHolder = title;
  return (
    <Modal
      bodyOpenClassName={placeHolder}
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Inscription"
    >
      <button onClick={closeModal} type="button">
        <FontAwesomeIcon className="" icon={faTimes} />
      </button>
      <form className="form__login" onSubmit={handleSubmit}>
        <Field
          type="text"
          name="firstname"
          placeholder="Prénom de l'auteur"
          onChange={onChangefieldAuthor}
          value={firstname}
        />
        <Field
          type="text"
          name="lastname"
          placeholder="Nom de de l'auteur"
          onChange={onChangefieldAuthor}
          value={lastname}
        />
        <button onClick={closeModal} type="button">
          Annuler
          <FontAwesomeIcon className="no-pointer" icon={faTimes} />
        </button>
        <button type="submit" className="form__login-button">Envoyer</button>
      </form>
    </Modal>
  );
}

AuthorModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  addElementAuthor: PropTypes.func.isRequired,
  onChangefieldAuthor: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorId: PropTypes.number.isRequired,
};
