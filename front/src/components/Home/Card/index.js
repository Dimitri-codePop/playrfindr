import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

const Card = ({
  id,
  label,
  picture,
  number,
  star
}) => (
  <article className="card">
        <FontAwesomeIcon icon={star} className="card-rank" />
      <span className="card-number">
        {number}
      </span>
    <img className="card-img" src={picture} alt={label} />
    <div className="card-content">
      <h2 className="card-title">{label}</h2>
    </div>
      <Link
        className="card-link"
        to={`/jeu/${id}`}
      >
        Détails
      </Link>
  </article>
);

Card.propTypes = {
  
  label: PropTypes.string.isRequired,
  picture: PropTypes.string,
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  star: PropTypes.object.isRequired,
};

Card.defaultProps = {
  picture: '',
};
export default Card;
