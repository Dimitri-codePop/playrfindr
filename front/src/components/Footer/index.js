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
      <div className="footer__grid">
        <h2 className="footer__title">Support</h2>
        <span>Contactez-nous</span>
        <span>FAQ</span>
      </div>
      <div className="footer__grid">
        <h2 className="footer__title">A propos</h2>
        <span>CGU</span>
        <span>Mentions légales</span>
        <span><FontAwesomeIcon icon={faCopyright} /> PlayrFindr</span>
      </div>
      <div className="footer__grid"> 
        <h2 className="footer__title">Retrouvez nous</h2>
        <div>
        <FontAwesomeIcon icon={faFacebookSquare} className="footer__brands-icons"/>
        <FontAwesomeIcon icon={faInstagramSquare} className="footer__brands-icons"/>
        <FontAwesomeIcon icon={faTwitterSquare} className="footer__brands-icons"/>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {

};
