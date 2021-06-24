import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Edit from 'src/containers/Profil/Edit';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { Link } from 'react-router-dom';
import EditPassword from 'src/containers/Profil/EditPassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { getAge } from 'src/selectors/date';
import Modal from 'react-modal';
import './style.scss';

export default function Content({
  user,
  paramsId,
  showMessage,
  setShowMessage,
  idCurrent,
  changefieldMessage,
  contentMessage,
  sendMessageContent,
}) {
  const [currentUser, setCurrentUser] = useState(true);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
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
    if (idCurrent === paramsId) {
      setCurrentUser(true);
    } else {
      setCurrentUser(false);
    }
  }, [paramsId]);

  const handleModalEdit = () => {
    setModalEditOpen(!modalEditOpen);
  };
  const handleModalEditPassword = () => {
    setIsOpen(!isOpen);
  };
  const openModalMessage = () => {
    setModalMessage(true);
  };
  const handleEndModal = () => {
    setModalMessage(false);
  };
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    sendMessageContent(contentMessage, paramsId);
    setModalMessage(false);
  }
  
  // END GESTION EDIT
  return (
    <>
      <div className="profil__section1">
        <img className="profil__image" src={picture} alt="profil of user" />
        <div className="profil__content">
          <div className="profil__name">
            <p className="profil__name__content">{firstname} {lastname}</p>
            {currentUser &&
              <Link
                to='/messagerie'
              >
                <FontAwesomeIcon className="profil__name__envelop" icon={faEnvelope} />
              </Link>
            }
            {!currentUser &&
              <FontAwesomeIcon 
                className="profil__name__envelop" 
                icon={faComment} 
                onClick={openModalMessage}
              />
            }

          </div>
          <p className="profil__age">{age} ans</p>
          <p className="profil__email">{email}</p>
          <div className="profil__dpt">
            <p className="profil__dpt__title">Département</p>
            <p className="profil__dpt__content">{department}</p>
          </div>
          {currentUser && (
            <div className="profil__btn">
              <button type="button" onClick={handleModalEdit} className="btn profil__btn" id="modal_login">Edit</button>
              <button type="button" onClick={handleModalEditPassword} className="btn profil__btn" id="modal_login">Changer mot de passe</button>
            </div>
          )}
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
      {modalEditOpen && (
        <Edit
          modalEditOpen={modalEditOpen}
          setModalEditOpen={setModalEditOpen}
          {...user}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        />
      )}
      {isOpen && (
        <EditPassword
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        />
      )}
      <Modal isOpen={modalMessage} onRequestClose={handleEndModal}>
        <form onSubmit={handleSubmitMessage}>
        <Field
            type="text"
            name="contentMessage"
            placeholder="Votre message..."
            onChange={changefieldMessage}
            value={contentMessage}
          />
          <button type="submit">Envoyer</button>
          <FontAwesomeIcon onClick={handleEndModal} className="close_modal" icon={faTimes} />
        </form>
      </Modal>
    </>
  );
}

Content.propTypes = {
  user: PropTypes.object.isRequired,
  paramsId: PropTypes.number.isRequired,
};
