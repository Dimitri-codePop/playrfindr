import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Form from 'src/components/Home/Modals/Signup/Form';

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

 function afterOpenModal() {
    // references are now sync'd and can be accessed.
    const subtitle= document.querySelector('.titleModal');
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setSignupIsHidden(!signupIsHidden);
  }


  return (
    <div>
      <Modal
        isOpen={signupIsHidden}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Connexion"
      >
        <Form closeModal={closeModal}/>
      </Modal>
    </div>
  );
}

Signup.propTypes = {

};
