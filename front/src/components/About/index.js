import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function About({
}) {

  return (
      <main className="about">
        <h1 className="about-title">La Team</h1>
        <div className="about-items"> 
          <h2>
            Antoine Noix
          </h2>
          <div className="about-subitems">
          <img src="https://ca.slack-edge.com/T01H7FN28C9-U01JS1Y5481-3612d6097c0b-512" alt="Image d'Antoine Noix" className="about-image"></img>
          </div>
          <p>Scrum Master & Développeur Front </p>
        </div>
        <div className="about-items">
          <h2>
            Paul Hennin
          </h2>
          <div className="about-subitems">
          <img src="https://ca.slack-edge.com/T01H7FN28C9-U01HY1QV5DZ-28d0bd528241-512" alt="Image de Paul Hennin" className="about-image"></img>
          </div>
          <p>Lead Dev Front & Git Master</p>
        </div>
        <div className="about-items">
          <h2>
            Dimitri Martin
          </h2>
          <div className="about-subitems">
          <img src="https://ca.slack-edge.com/T01H7FN28C9-U01J16E65DY-a77f7d4e8e3c-512" alt="Image de Dimitri Martin" className="about-image"></img>
          </div>
          <p>Lead Dev Back</p>
        </div>
        <div className="about-items">
          <h2>
            Nicolas Berthe
          </h2>
          <div className="about-subitems">
          <img src="https://ca.slack-edge.com/T01H7FN28C9-U01J4A6NQAY-g29acfd1fd82-512" alt="Photo de Nicolas Berthe" className="about-image"></img>
          </div>
          <p>Designer</p>
        </div>
      </main>
  );
}

About.propTypes = {

};
