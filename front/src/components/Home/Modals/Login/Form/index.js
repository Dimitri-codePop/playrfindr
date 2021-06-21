import React from 'react';
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
  changeField,
  email,
  password,
}) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    closeModal();
    //setLoginIsHidden(!loginIsHidden)
  };

  return (
    <div className="modal_signup">
      <div className="modal_signup--part1">
        <FontAwesomeIcon onClick={closeModal} className="modal_signup--close" icon={faTimes} />
        <img className="modal_signup--img" src={imageModale} alt=""/>
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
              <input
                type="checkbox"
                //onChange={handleClickCheck}
                //name={name}
                className="events__main__items--icon"
                //onClick={handleClickSetEvent}
              />
              <label >Retenir mes identifiants</label>
            </div>
          </div>
          <div className="form__login-connect">
            <p>Je n'ai pas de compte? <span>Je m'inscris</span></p>
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
};

Form.defaultProps = {
  email: '',
};
