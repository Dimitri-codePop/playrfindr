import React from 'react';
import Proptypes from 'prop-types';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default function FormEvent({
  handleEndModal,
  label,
  date,
  location,
  content,
  max_player,
  changefieldEvent,
  handleNewEvent,
}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewEvent();
    handleEndModal();
  };

  return(
    <>
        <form onSubmit={handleSubmit}>
          <h1>Créer un évènement</h1>
          <Field
            type="text"
            name="label"
            placeholder="Titre de l'évènement"
            onChange={changefieldEvent}
            value={label}
          />
          <Field
            type="date"
            name="date"
            placeholder="Date"
            onChange={changefieldEvent}
            value={date}
          />
          <Field
            type="text"
            name="location"
            placeholder="Adresse"
            onChange={changefieldEvent}
            value={location}
          />
          <Field
            type="number"
            name="max_player"
            placeholder="Nombre de joueurs max"
            onChange={changefieldEvent}
            value={max_player}
          />
          <Field
            type="text"
            name="content"
            placeholder="Description de l'évènement..."
            onChange={changefieldEvent}
            value={content}
          />
          <button type="submit">Créer</button>
          <FontAwesomeIcon onClick={handleEndModal} className="close_modal" icon={faTimes} />
        </form>
    </>
  );
}

FormEvent.propTypes = {};

        
