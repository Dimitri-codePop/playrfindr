import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCopyright,
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import './style.scss';

export default function Footer() {
  return (
    <footer>
      <div className="footer__grid">
        <h2 className="footer__title">Support</h2>
        <Link to="/contact">
        <span>Contactez-nous</span>
        </Link>
        <Link to="/faq">
        <span>FAQ</span>
        </Link>
        <Link to="/about">
        <span>A propos de nous</span>
        </Link>
      </div>
      <div className="footer__grid">
        <h2 className="footer__title">A propos</h2>
        <Link to="/cgu">
        <span>Conditions Général d'Utilisation</span>
        </Link>
        <span><FontAwesomeIcon icon={faCopyright} /> PlayrFindr</span>
      </div>
      <div className="footer__grid"> 
        <h2 className="footer__title">Retrouvez nous</h2>
        <div>
        <a href="http://www.facebook.com">
        <FontAwesomeIcon icon={faFacebookF} className="footer__brands-icons"/>
          </a>
          <a href="http://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} className="footer__brands-icons"/>
          </a>
          <a href="http://www.twitter.com">
        <FontAwesomeIcon icon={faTwitter} className="footer__brands-icons"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {

};
