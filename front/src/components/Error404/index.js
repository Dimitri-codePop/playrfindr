import React from 'react';
import PropTypes from 'prop-types';
import Error from 'src/assets/404.png';
import './style.scss';

export default function Error404() {
  return (
    <>
      <div className="logo__error_container">
        <img src={Error} alt="Error 404" className="logo__error" />
        <h1>La page que vous recherchez n'existe pas !</h1>
      </div>
    </>
  );
}

Error404.propTypes = {

};
