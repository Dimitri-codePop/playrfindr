import React from 'react';
import PropTypes from 'prop-types';

import Signup from './Signup';
import Login from './Login';
export default function Modals({loginIsHidden}) {
  return (
    <>
      <Login loginIsHidden={loginIsHidden}/>
      <Signup />
    </>
);
}

Modals.propTypes = {

};
