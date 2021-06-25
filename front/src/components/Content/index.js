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
import imageModale from 'src/assets/Imageevent.png'
import './style.scss';
import TextField from '@material-ui/core/TextField';

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
  };
  const handleOnChange = (event) => {
    changefieldMessage(event.target.value, event.target.name)
  };

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      height                : '50%',
      transform             : 'translate(-50%, -50%)',
    },
  };
  
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
      <Modal isOpen={modalMessage} onRequestClose={handleEndModal} style={customStyles}>
        <div className="eventModal">
          <div className="eventModal-part1">
            <img className="eventModal-img" src={imageModale} alt=""/>
          </div>
          <div className="eventModal-part3">
          <h1 className="messages-titlemodal">Ecrire un message</h1>
          <form className="messages-form" onSubmit={handleSubmitMessage}>
          <div className="messages-textmodal">
          <TextField 
                  fullWidth={true}
                  multiline
                  rows={5}
                  rowsMax={5}
                  type="text"
                  name="contentMessage"
                  placeholder="Votre message..."
                  onChange={handleOnChange}
                  value={contentMessage}
                />
            </div>
            <button className="messages-btn" type="submit">Envoyer</button>
            <FontAwesomeIcon onClick={handleEndModal} className="close_modal" icon={faTimes} />
          </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

Content.propTypes = {
  user: PropTypes.object.isRequired,
  paramsId: PropTypes.number.isRequired,
};
