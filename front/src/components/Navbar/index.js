import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Mobile from 'src/containers/Navbar/Mobile';
import Web from 'src/containers/Navbar/Web'


export default function Navbar({ isLogged, handleDisconnect }) {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 960) {
        setToggleMenu(false);
        setWidth(window.innerWidth);
      }
      else {
        setToggleMenu(true);
        setWidth(window.innerWidth);
      }
    };
  
    if (window.innerWidth > 960) {
      setToggleMenu(false);
      setWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, [width]);

  return (
    <>
      {toggleMenu ? (<Mobile handleDisconnect={handleDisconnect}/> ) : (<Web handleDisconnect={handleDisconnect}/>)}
    </>
  );
}

Navbar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
};
