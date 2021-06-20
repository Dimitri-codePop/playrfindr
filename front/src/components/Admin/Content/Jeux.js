import React from 'react';
import PropTypes from 'prop-types';

export default function Jeux({games}) {
  console.log(games);
  const tr = games.map(obj => {
    return(
      <tr>
        <td>{obj.id}</td>
        <td>{obj.label}</td>
        <td>{obj.category_all[0]}</td>
        <td>{obj.theme_all[0]}</td>
        <td>Edit / Suppr</td>
      </tr>
    )
  })
  return (
    <div className="admin__content">App

      <table className="admin__games_table">
        <thead>
          <tr>
            <th className="admin__games_table_th">id</th>
            <th className="admin__games_table_th">label</th>
            <th className="admin__games_table_th">category</th>
            <th className="admin__games_table_th">themes</th>
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

Jeux.propTypes = {

};
