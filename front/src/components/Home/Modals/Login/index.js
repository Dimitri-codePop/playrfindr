import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './style.scss';
import Form from 'src/containers/Home/Modals/Login/Form';

export default function Login({
  loginIsHidden,
  setLoginIsHidden,
  showMessage,
  setShowMessage,
  signupIsHidden,
  setSignupIsHidden,
}) {
  Modal.setAppElement('#root')
  
  if (window.innerWidth > 960) {
  customStyles = { 
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
  } 
  if (window.innerWidth < 960) {
    customStyles = { 
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        height                : '90%',
        width                 : '90%',
        transform             : 'translate(-50%, -50%)',
      },
    };
    } 

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setLoginIsHidden(!loginIsHidden);
  }


  return (
    <div>
      <Modal
        isOpen={loginIsHidden}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="customStyles"
        contentLabel="Connexion"
        closeTimeoutMS={500}
      >
        <Form
          closeModal={closeModal}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
          signupIsHidden={signupIsHidden}
          setSignupIsHidden={setSignupIsHidden}
        />
      </Modal>
    </div>
);
}

Login.propTypes = {
  loginIsHidden: PropTypes.bool.isRequired,
  setLoginIsHidden: PropTypes.func.isRequired,
  showMessage: PropTypes.bool.isRequired,
  setShowMessage: PropTypes.func.isRequired,
  signupIsHidden: PropTypes.bool.isRequired,
  setSignupIsHidden: PropTypes.func.isRequired,
};
