import React from 'react';
import PropTypes from 'prop-types';

export default function Users({users}) {
  console.log(users);
  const tr = users.map(obj => {
    return(
      <tr key={obj.firstname}>
        <td>{obj.id}</td>
        <td><img src={obj.picture} alt="profil user" className="admin__users_logo"/></td>
        <td>{obj.firstname} {obj.lastname}</td>
        <td>{obj.email}</td>
        <td>Edit / Suppr</td>
      </tr>
    )
  });
  return (
    <div className="admin__content">App

      <table className="admin__games_table">
        <thead>
          <tr>
            <th className="admin__games_table_th">ID</th>
            <th className="admin__games_table_th">Picture</th>
            <th className="admin__games_table_th">Name</th>
            <th className="admin__games_table_th">Email</th>
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
};
