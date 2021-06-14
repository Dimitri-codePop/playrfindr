import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Form from 'src/containers/Home/Modals/Signup/Form';

import './style.scss';

export default function Signup({ signupIsHidden, setSignupIsHidden }) {
  Modal.setAppElement('#root')

  
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '10%',
      bottom                : '10%',
      height                : '450px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      zIndex                : '1000',
    }
  };

  function closeModal(){
    setSignupIsHidden(!signupIsHidden);
  }


  return (
    <div>
      <Modal
        bodyOpenClassName={"signup"}
        isOpen={signupIsHidden}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Inscription"
      >
        <Form closeModal={closeModal}/>
      </Modal>
    </div>
  );
}

Signup.propTypes = {

};
