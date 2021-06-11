import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './style.scss';
import Form from 'src/containers/Home/Modals/Login/Form';

export default function Login({ 
  loginIsHidden, 
  setLoginIsHidden,
}) {
  Modal.setAppElement('#root')
  
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal(){
    setLoginIsHidden(!loginIsHidden);
  }


  return (
    <div>
      <Modal
        isOpen={loginIsHidden}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Connexion"
      >
        <Form 
        closeModal={closeModal}
        />
      </Modal>
    </div>
);
}

Login.propTypes = {

};
