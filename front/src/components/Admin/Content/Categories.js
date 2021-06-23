import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TypeModal from 'src/components/Admin/TypeModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default function Categories({
  categories,
  deleteElement,
  addElementType,
  editElementType,
  showModal,
  setShowModal,
  onChangefieldType,
  changeCat,
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [id, setId] = useState(0);
  function openModal() {
    setShowModal(!showModal);
  }
  const onClickDelete = (event) => {
    const name = 'category';
    console.log(event.target.id, name);
    deleteElement(event.target.id, name);
  };
  function openEditModal(event) {
    setShowEditModal(!showEditModal);
    setId(event.target.id);
  }
  const tr = categories.map(obj => {
    return(
      <tr key={obj.label}>
        <td>{obj.label}</td>
        <td>
          <button type="button" id={obj.id} onClick={openEditModal} className="profil__delete-btn">
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
    <div className="admin__content">
      {showModal && (
        <TypeModal
          setShowModal={setShowModal}
          type="category"
          showModal={showModal}
          onChangefieldType={onChangefieldType}
          addElementType={addElementType}
          champs={changeCat}
        />
      )}
      {showEditModal && (
        <TypeModal
          setShowModal={setShowEditModal}
          title="Edit du champs"
          type="category"
          showModal={showEditModal}
          onChangefieldType={onChangefieldType}
          addElementType={editElementType}
          champs={changeCat}
          targetId={id}
        />
      )}
      <button type="button" onClick={openModal} className="btn profil__btn">
        Ajouter un élément
        <FontAwesomeIcon className="profil__delete no-pointer" icon={faPlusSquare} />
      </button>
      <table className="admin__games_table">
        <thead>
          <tr>
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
  deleteElement: PropTypes.func.isRequired,
  addElementType: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  onChangefieldType: PropTypes.func.isRequired,
  changeCat: PropTypes.string.isRequired,
  editElementType: PropTypes.func.isRequired,
};
