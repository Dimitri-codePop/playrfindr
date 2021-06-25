import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import GameModal from 'src/containers/Admin/GameModal';

export default function Jeux({
  games,
  deleteElement,
  onChangeSelectField,
  onChangefieldGame,
  categories,
  addElementGame,
  themes,
  authors,
  editors,
}) {
  const [showModal, setShowModal] = useState(false);
  console.log('games', games);
  const handleOnClick = (event) => {
    const name = 'jeux';
    console.log(event.target.id, name);
    deleteElement(event.target.id, name);
  };
  function openModal() {
    setShowModal(!showModal);
  }
  const tr = games.map(obj => {
    console.log(obj);
    return(
      <tr key={obj.label}>
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
    <div className="admin__content">
        {showModal && (
          <GameModal
            setShowModal={setShowModal}
            type="game"
            title="Ajout d'un jeu"
            showModal={showModal}
            onChangefieldGame={onChangefieldGame}
            onChangeSelectField={onChangeSelectField}
            addElementGame={addElementGame}
            categories={categories}
            themes={themes}
            authors={authors}
            editors={editors}
          />
        )}
        <button type="button" onClick={openModal} className="btn profil__btn">
          Ajouter un élément
          <FontAwesomeIcon className="profil__delete no-pointer" icon={faPlusSquare} />
        </button>
      <table className="admin__games_table">
        <thead>
          <tr>
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
