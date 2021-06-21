import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';


import './style.scss';

export default function Field({ type, name, placeholder, value, onChangeValue }) {
  const handleOnChange = (event) => {
    onChangeValue(event.target.value, name);
  };

  return (
    <div className="field">
      <TextField 
        className="field__input--connect"
        required id="standard-required" 
        label={placeholder}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};
