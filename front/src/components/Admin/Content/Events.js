import React from 'react';
import PropTypes from 'prop-types';

export default function Events({events}) {
  const tr = events.map(obj => {
    return(
      <tr key={obj.label}>
        <td>{obj.id}</td>
        <td>{obj.label}</td>
        <td>{obj.address}</td>
        <td>{obj.town}</td>
        <td>{obj.creator_firstname}{obj.creator_lastname}</td>
        <td>{obj.max_player}</td>
        <td>Edit / Suppr</td>
      </tr>
    )
  });
  return (
    <div className="admin__content">App

      <table className="admin__games_table">
        <thead>
          <tr>
            <th className="admin__games_table_th">id</th>
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
};
