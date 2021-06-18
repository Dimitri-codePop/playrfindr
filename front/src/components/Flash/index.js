import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Flash({ message, isOk, showMessage, setShowMessage }) {
  useEffect(() => {
    setTimeout(() => setShowMessage(false), 3000);
  }, [showMessage]);
  const classMessageSwap = isOk ? 'green' : 'red';
  return (
    <>
      { showMessage && (
        <h1 className={classMessageSwap}> {message} </h1>
      )}
    </>
  );
}

Flash.propTypes = {
  message: PropTypes.string.isRequired,
  isOk: PropTypes.number.isRequired,
};
