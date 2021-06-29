import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Home/Modals/Login/Form/Field';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import imageModale from 'src/assets/Imagemodale.png'


import './style.scss';

export default function Form({
  handleLogin,
  closeModal,
  showMessage,
  setShowMessage,
  changeField,
  email,
  password,
  setSignupIsHidden,
}) {
  // const [remindMe, setRemindMe] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    setShowMessage(!showMessage);
    closeModal();
  };

  const handleOnSignup = () => {
    setSignupIsHidden(true);
    closeModal();
  };

  // REMIND ME CUT FOR NOW
  // const handleClickCheck = () => {
  //   setRemindMe(!remindMe);
  //   console.log(remindMe);
  // };

  return (
    <div className="modal_signup">
      <div className="modal_signup--part1">
        <FontAwesomeIcon onClick={closeModal} className="modal_signup--close" icon={faTimes} />
        <img className="modal_signup--img" src={imageModale} alt="" />
      </div>
      <div className="modal_signup--part2">
        <form className="modal_signup--form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <h1 className="modal_signup--titleconnect">Connection</h1>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            onChangeValue={changeField}
            value={email}
          />
          <div className="modal_signup--pw">
            <Field
              type="password"
              name="password"
              placeholder="Mot de passe"
              onChangeValue={changeField}
              value={password}
            />
            <div>
              {/* <label htmlFor="remindMe">Retenir mes identifiants
                <input
                  type="checkbox"
                  onChange={handleClickCheck}
                  id="remindMe"
                  className="events__main__items--icon"
                />
              </label> */}
            </div>
          </div>
          <div className="form__login-connect">
            <p>Je n'ai pas de compte? <span onClick={handleOnSignup}>Je m'inscris</span></p>
            <button type="submit" className="form__login-buttonconnect">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  setSignupIsHidden: PropTypes.func.isRequired,
  showMessage: PropTypes.bool.isRequired,
  setShowMessage: PropTypes.func.isRequired,
};

Form.defaultProps = {
  email: '',
};
