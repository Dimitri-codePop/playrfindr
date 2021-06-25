import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  TextField,
  Select,
  MenuItem,
  Chip,
  InputLabel,
} from '@material-ui/core';

import './style.scss';

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
  theme,
  category,
  addElementGame,
  onChangefieldGame,
  onChangeSelectField,
  onChangeSelectFieldUnique,
  title,
  gameId,
  themes,
  categories,
  editors,
  authors,
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
    addElementGame(gameId);
    closeModal();
  };
  const handleOnChangeSelectField = (event) => {
    onChangeSelectField(event.target.value, event.target.name);
  };

  const handleOnChangeSelectFieldUnique = (event) => {
    onChangeSelectFieldUnique(event.target.value, event.target.name);
  };
  const handleDescribeField = (event) => {
    onChangefieldGame(event.target.value, event.target.name);
  };
  return (
    <Modal
      bodyOpenClassName={title}
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Ajout d'un Jeu"
    >
      <button onClick={closeModal} type="button">
        <FontAwesomeIcon className="" icon={faTimes} />
      </button>
      <form className="modal__add-game" onSubmit={handleSubmit}>
        <div>
          <Field
            type="text"
            name="label"
            placeholder="Nom du jeux"
            onChange={onChangefieldGame}
            value={label}
          />
        </div>
        <div className="modal__add-game--number">
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
        </div>
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
          onChange={handleDescribeField}
          name="describe"
          rows={4}
          rowsMax={6}
          autoWidth={true}
          value={describe}
        />
        <div>
          <InputLabel id="author">Autheurs</InputLabel>
          <Select
            labelId="author"
            multiple
            value={author}
            onChange={handleOnChangeSelectField}
            name="author"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {authors.map((obj) => {
              const name = `${obj.lastname} ${obj.firstname}`;
              return (<MenuItem value={obj.id}>{name}</MenuItem>);
            })}
          </Select>
        </div>
        <div>
          <InputLabel id="editor">Editeur</InputLabel>
          <Select
            labelId="editor"
            value={editor}
            onChange={handleOnChangeSelectFieldUnique}
            autoWidth={true}
            name="editor"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {editors.map((obj) => {
              return(<MenuItem value={obj.id}>{obj.label}</MenuItem>)
            })}
          </Select>
        </div>
        <div className="">
          <InputLabel id="theme">Thèmes</InputLabel>
          <Select
            labelId="theme"
            multiple
            value={theme}
            autoWidth={true}
            onChange={handleOnChangeSelectField}
            name="theme"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {themes.map((obj) => {
              return(<MenuItem value={obj.id}>{obj.label}</MenuItem>)
            })}
          </Select>
        </div>
        <div className="">
          <InputLabel id="category">Catégories</InputLabel>
          <Select
            labelId="category"
            multiple
            autoWidth={true}
            value={category}
            onChange={handleOnChangeSelectField}
            name="category"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {categories.map((obj) => {
              return(<MenuItem value={obj.id}>{obj.label}</MenuItem>)
            })}
          </Select>
        </div>
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
