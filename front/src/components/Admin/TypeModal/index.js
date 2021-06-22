import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function TypeModal({
  setShowModal,
  showModal,
  type,
  champs,
  addElementType,
  onChangefieldType,
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
    console.log('openModal');
    setShowModal(!showModal);
  }
  function closeModal() {
    console.log('closeModal', showModal);
    setShowModal(!showModal);
    console.log(showModal);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    addElementType(champs, type);
    closeModal();
    // setShowMessage(!showMessage);
  };
  const placeHolder = `Nouvelle entrée ${type}`;
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
          name={type}
          placeholder={placeHolder}
          onChange={onChangefieldType}
          value={champs}
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

TypeModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  champs: PropTypes.string.isRequired,
  addElementType: PropTypes.func.isRequired,
  onChangefieldType: PropTypes.func.isRequired,
};
