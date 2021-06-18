import React from 'react'
import Proptypes from 'prop-types'
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import './style.scss';

export default function EditEvent({
  handleEditEvent,
  label,
  date,
  address,
  number_address,
  town,
  content,
  max_player,
  changefieldEvent,
  handleClickEndEditModal,
  id,
}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditEvent(id);
    handleClickEndEditModal();
  };

  const handleClickClose = () => {
    handleClickEndEditModal();
  };

  moment.locale('fr')
  const stillUtc = moment.utc(date).toDate();
  console.log(stillUtc)
  const dateSetUp = moment(stillUtc).local().format("yyyy-MM-DDTHH:mm");

  return(
    <>
        <form onSubmit={handleSubmit}>
          <h1>Modifier l'évènement</h1>
          <Field
            type="text"
            name="label"
            onChange={changefieldEvent}
            placeholder="Titre de l'évènement"
            value={label}
          />
          <Field
            type="datetime-local"
            name="date"
            onChange={changefieldEvent}
            value={dateSetUp}
          />
          <Field
            type="text"
            name="address"
            onChange={changefieldEvent}
            placeholder="Adresse"
            value={address}
          />
          <Field
            type="text"
            name="number_address"
            onChange={changefieldEvent}
            placeholder="Code Postal"
            value={number_address}
          />
          <Field
            type="text"
            name="town"
            onChange={changefieldEvent}
            placeholder="Ville"
            value={town}
          />
          <Field
            type="number"
            name="max_player"
            onChange={changefieldEvent}
            placeholder="Nombre max de joueurs"
            value={max_player}
          />
          <Field
            type="text"
            name="content"
            onChange={changefieldEvent}
            placeholder="Description de l'évènement..."
            value={content}
          />
          <button type="submit">Valider</button>
          <FontAwesomeIcon onClick={handleClickClose} className="close_modal" icon={faTimes} />
        </form>
    </>
  );
}

EditEvent.propTypes = {};
