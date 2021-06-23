import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Authors({ authors, deleteElement }) {
  const handleOnClick = (event) => {
    const name = 'author';
    console.log(event.target.id, name);
    deleteElement(event.target.id, name);
  };
  console.log(authors);
  const tr = authors.map(obj => {
    return(
      <tr key={obj.label}>
        <td>{obj.firstname} {obj.lastname}</td>
        <td>Edit /
          <button type="button" id={obj.id} onClick={handleOnClick} className="profil__delete-btn">
            <FontAwesomeIcon className="profil__delete no-pointer" icon={faTimes} />
          </button>
        </td>
      </tr>
    )
  });
  return (
    <div className="admin__content">App
ADD
      <table className="admin__games_table">
        <thead>
          <tr>
            <th className="admin__games_table_th">Name</th>
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

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  deleteElement: PropTypes.func.isRequired,
};
