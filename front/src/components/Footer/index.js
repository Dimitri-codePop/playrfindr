import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        <Link to="/contact">
        <span>Contactez-nous</span>
        </Link>
        <Link to="/faq">
        <span>FAQ</span>
        </Link>
      </div>
      <div className="footer__grid">
        <h2 className="footer__title">A propos</h2>
        <Link to="/cgu">
        <span>CGU</span>
        </Link>
        <Link to="/legals">
        <span>Mentions légales</span>
        </Link>
        <span><FontAwesomeIcon icon={faCopyright} /> PlayrFindr</span>
      </div>
      <div className="footer__grid"> 
        <h2 className="footer__title">Retrouvez nous</h2>
        <div>
        <a href="http://www.facebook.com">
        <FontAwesomeIcon icon={faFacebookSquare} className="footer__brands-icons"/>
          </a>
          <a href="http://www.instagram.com">
        <FontAwesomeIcon icon={faInstagramSquare} className="footer__brands-icons"/>
          </a>
          <a href="http://www.twitter.com">
        <FontAwesomeIcon icon={faTwitterSquare} className="footer__brands-icons"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {

};
