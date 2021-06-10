import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Mobile from 'src/containers/Navbar/Mobile';
import Web from 'src/components/Navbar/Web'


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 1200) {
        setToggleMenu(false);
        setWidth(window.innerWidth);
      }
      else {
        setToggleMenu(true);
        setWidth(window.innerWidth);
      }
    };
  
    if (window.innerWidth > 1200) {
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
      {toggleMenu ? (<Mobile /> ) : (<Web />)}
    </>
  );
}

Navbar.propTypes = {
};
