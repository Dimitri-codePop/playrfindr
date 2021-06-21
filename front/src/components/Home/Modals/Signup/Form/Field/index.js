import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


import './styles.scss';

export default function Field({ type, name, placeholder, value, onChange }) {

  const handleOnChange = (event) => {
    onChange(event.target.value, name);
  };

  return (
    <div className="field">
      <TextField 
        className="field__input"
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
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Field.defaultProps = {
  type: 'text',
};

