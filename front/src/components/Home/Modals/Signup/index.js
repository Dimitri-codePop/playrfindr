import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Form from 'src/containers/Home/Modals/Signup/Form';

import './style.scss';

export default function Signup({
  signupIsHidden,
  setSignupIsHidden,
  setLoginIsHidden,
  setShowMessage,
  showMessage,
}) {
  Modal.setAppElement('#root');

  function closeModal() {
    setSignupIsHidden(!signupIsHidden);
  }

  return (
    <div className="modalstyle">
      <Modal
        bodyOpenClassName={"signup"}
        isOpen={signupIsHidden}
        onRequestClose={closeModal}
        className="customStylesSignup"
        contentLabel="Inscription"
      >
        <Form
          closeModal={closeModal}
          setSignupIsHidden={setSignupIsHidden}
          signupIsHidden={signupIsHidden}
          setLoginIsHidden={setLoginIsHidden}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        />
      </Modal>
    </div>
  );
}

Signup.propTypes = {
  showMessage: PropTypes.bool.isRequired,
  setShowMessage: PropTypes.func.isRequired,
  signupIsHidden: PropTypes.bool.isRequired,
  setSignupIsHidden: PropTypes.func.isRequired,
  setLoginIsHidden: PropTypes.func.isRequired,
};
