import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function Field({ type, name, placeholder, value, onChange }) {
  const handleOnChange = (event) => {
    onChange(event.target.value, name);
  };

  return (
    <div className="field">
      <input
        className="field__input"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
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
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};
