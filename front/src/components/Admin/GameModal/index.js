import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TextField, Select, MenuItem } from '@material-ui/core';
export default function GameModal({
  setShowModal,
  showModal,
  label,
  duration,
  picture,
  player_min,
  player_max,
  age_min,
  year,
  describe,
  author,
  editor,
  theme_all,
  category_all,
  addElementGame,
  onChangefieldGame,
  onChangeSelectField,
  title,
  gameId,
  themes,
  categories,
  editors,
}) {
  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      height                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      zIndex                : '1000',
    },
  };
  function openModal() {
    setShowModal(!showModal);
  }
  function closeModal() {
    setShowModal(!showModal);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(gameId);
    addElementGame(gameId);
    closeModal();
  };
  return (
    <Modal
    bodyOpenClassName={placeHolder}
    isOpen={openModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Inscription"
  >
    <button onClick={closeModal} type="button">
      <FontAwesomeIcon className="" icon={faTimes} />
    </button>
    <form className="form__login" onSubmit={handleSubmit}>
        <Field
          type="text"
          name="label"
          placeholder="Nom du jeux"
          onChange={onChangefieldGame}
          value={label}
        />
        <Field
          type="number"
          name="duration"
          placeholder="Temps moyen d'une partie"
          onChange={onChangefieldGame}
          value={duration}
        />
        <Field
          type="number"
          name="player_min"
          placeholder="Nombre de joueurs Min"
          onChange={onChangefieldGame}
          value={player_min}
        />
        <Field
          type="number"
          name="player_max"
          placeholder="Nombre de joueurs Max"
          onChange={onChangefieldGame}
          value={player_max}
        />
        <Field
          type="number"
          name="age_min"
          placeholder="Age Minimum"
          onChange={onChangefieldGame}
          value={age_min}
        />
        <Field
          type="number"
          name="year"
          placeholder="Année de publication"
          onChange={onChangefieldGame}
          value={year}
        />
        <TextField 
          multiline
          placeholder="Description du jeux"
          rows={4}
          rowsMax={6}
          fullWidth={true}
          value={describe}
        />
        <Select
        multiple
        value={author}
        onChange={onChangeSelectField}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {authors.map((obj) => {
            return(<MenuItem value={obj.id}>{obj.firstname} {obj.lastname} </MenuItem>)
          })}
        </Select>
        <Select
        multiple
        value={editor}
        onChange={onChangeSelectField}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {editors.map((obj) => {
            return(<MenuItem value={obj.id}>{obj.firstname} {obj.lastname} </MenuItem>)
          })}
        </Select>
        <Select
        multiple
        value={theme}
        onChange={onChangeSelectField}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {themes.map((obj) => {
            return(<MenuItem value={obj.id}>{obj.firstname} {obj.lastname} </MenuItem>)
          })}
        </Select>
        <Select
        multiple
        value={category}
        onChange={onChangeSelectField}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {categories.map((obj) => {
            return(<MenuItem value={obj.id}>{obj.firstname} {obj.lastname} </MenuItem>)
          })}
        </Select>
        <button onClick={closeModal} type="button">
          Annuler
          <FontAwesomeIcon className="no-pointer" icon={faTimes} />
        </button>
        <button type="submit" className="form__login-button">Envoyer</button>
      </form>
    </Modal>
);
}

GameModal.propTypes = {

};
