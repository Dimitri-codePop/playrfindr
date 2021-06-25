import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Flash({
  message,
  isOk,
  showMessage,
  setShowMessage,
}) {
  useEffect(() => {
    setTimeout(() => setShowMessage(false), 3000);
    console.log('on montre le message')
  }, [showMessage]);
  const classMessageSwap = isOk ? 'flash green' : 'flash red';
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
  isOk: PropTypes.bool.isRequired,
  showMessage: PropTypes.bool.isRequired,
  setShowMessage: PropTypes.func.isRequired,
};
