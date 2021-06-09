import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCopyright,
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import './style.scss';

export default function Footer() {
  return (
    <footer>
      <div class="footer__grid"> 
        <h2 className="footer__title">Réseaux</h2>
        <div>
        <FontAwesomeIcon icon={faFacebookSquare} className="footer__brands-icons"/>
        <FontAwesomeIcon icon={faInstagramSquare} className="footer__brands-icons"/>
        <FontAwesomeIcon icon={faTwitterSquare} className="footer__brands-icons"/>
        </div>
      </div>
      <div class="footer__grid">
        <h2 className="footer__title">
          <FontAwesomeIcon icon={faCopyright} /> PlayrFindr
        </h2>
      </div>
      <div class="footer__grid">
        <h2 className="footer__title">A propos</h2>
        <span>Contact</span>
        <span>CGU</span>
        <span>Mentions légales</span>
      </div>
    </footer>
  );
}

Footer.propTypes = {

};
