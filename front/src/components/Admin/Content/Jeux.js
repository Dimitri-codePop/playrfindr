import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Jeux({ games, deleteElement }) {
  console.log(games);
  const handleOnClick = (event) => {
    const name = 'jeux';
    console.log(event.target.id, name);
    deleteElement(event.target.id, name);
  };
  const tr = games.map(obj => {
    return(
      <tr key={obj.label}>
        <td>{obj.id}</td>
        <td>{obj.label}</td>
        <td>{obj.category_all[0]}</td>
        <td>{obj.theme_all[0]}</td>
        <td>Edit /
          <button type="button" id={obj.id} onClick={handleOnClick} className="profil__delete-btn">
            <FontAwesomeIcon className="profil__delete no-pointer" icon={faTimes} />
          </button>
        </td>
      </tr>
    )
  })
  return (
    <div className="admin__content">App
ADD
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
  games: PropTypes.array.isRequired,
  deleteElement: PropTypes.func.isRequired,
};
