import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import AuthorModal from 'src/components/Admin/AuthorModal';

export default function Authors({
  authors,
  deleteElement,
  addElementAuthor,
  editElementAuthor,
  onChangefieldAuthor,
  firstname,
  lastname,
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(0);
  function openModal() {
    setShowModal(!showModal);
  }
  function openEditModal(event) {
    setShowEditModal(!showEditModal);
    setId(event.target.id);
  }
  const onClickDelete = (event) => {
    const name = 'author';
    console.log(event.target.id, name);
    deleteElement(event.target.id, name);
  };
  const tr = authors.map(obj => {
    return(
      <tr key={obj.label}>
        <td>{obj.firstname} {obj.lastname}</td>
        <td><button type="button" id={obj.id} onClick={openEditModal} className="profil__delete-btn">
            Edit
          </button> /
          <button type="button" id={obj.id} onClick={onClickDelete} className="profil__delete-btn">
            <FontAwesomeIcon className="profil__delete no-pointer" icon={faTimes} />
          </button>
        </td>
      </tr>
    )
  });
  return (
    <div className="admin__content">{showModal && (
      <AuthorModal
        setShowModal={setShowModal}
        showModal={showModal}
        title="Nouvelle Entrée Autheur"
        firstname={firstname}
        lastname={lastname}
        addElementAuthor={addElementAuthor}
        onChangefieldAuthor={onChangefieldAuthor}
      />
    )}
      {showEditModal && (
      <AuthorModal
        setShowModal={setShowEditModal}
        showtModal={showEditModal}
        title="Nouvelle Entrée Autheur"
        firstname={firstname}
        lastname={lastname}
        addElementAuthor={editElementAuthor}
        onChangefieldAuthor={onChangefieldAuthor}
        authorId={id}
      />
      )}
      <button type="button" onClick={openModal} className="btn profil__btn">
        Ajouter un élément
        <FontAwesomeIcon className="profil__delete no-pointer" icon={faPlusSquare} />
      </button>
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
  addElementAuthor: PropTypes.func.isRequired,
  editElementAuthor: PropTypes.func.isRequired,
  onChangefieldAuthor: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};
