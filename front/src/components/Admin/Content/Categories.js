import React from 'react';
import PropTypes from 'prop-types';

export default function Categories({categories}) {
  console.log(categories);
  const tr = categories.map(obj => {
    return(
      <tr key={obj.label}>
        <td>{obj.id}</td>
        <td>{obj.label}</td>
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
            <th className="admin__games_table_th">Label</th>
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

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
