import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Events({ events, deleteElement }) {
  const handleOnClick = (event) => {
    const name = 'event';
    deleteElement(event.target.id, name);
  };
  const tr = events.map(obj => {
    return(
      <tr key={obj.label}>
        <td>{obj.label}</td>
        <td>{obj.address}</td>
        <td>{obj.town}</td>
        <td>{obj.creator_firstname}{obj.creator_lastname}</td>
        <td>{obj.max_player}</td>
        <td>
          <button type="button" id={obj.id} onClick={handleOnClick} className="profil__delete-btn">
            <FontAwesomeIcon className="profil__delete no-pointer" icon={faTimes} />
          </button>
        </td>
      </tr>
    )
  });
  return (
    <div className="admin__content">
      <table className="admin__games_table">
        <thead>
          <tr>
            <th className="admin__games_table_th">label</th>
            <th className="admin__games_table_th">Adresse</th>
            <th className="admin__games_table_th">Ville</th>
            <th className="admin__games_table_th">Créateur</th>
            <th className="admin__games_table_th">Participants Max</th>
            <th className="admin__games_table-th"> Edit </th>
          </tr>
        </thead>
        <tbody>
          {tr}
        </tbody>
      </table>
    </div>
);
}

Events.propTypes = {
  events: PropTypes.array.isRequired,
  deleteElement: PropTypes.func.isRequired,
};
