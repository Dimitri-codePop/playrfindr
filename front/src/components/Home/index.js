import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import accueil from 'src/assets/accueil.png'
export default function Home() {
  return (
  <div className="home">
    <img src={accueil} className="home__accueil-img"/>
  </div>
);
}

Home.propTypes = {

};
