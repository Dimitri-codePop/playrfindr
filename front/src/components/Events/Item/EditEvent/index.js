import React from 'react'
import PropTypes from 'prop-types'
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import imageModale from 'src/assets/Imageevent.png'
import TextField from '@material-ui/core/TextField';

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

  const handleOnChange = (event) => {
    changefieldEvent(event.target.value, event.target.name);
  };

  moment.locale('fr')
  const timeZone = 'Atlantic/Azores'
  const dateSetUp = moment(date).tz(timeZone).format("yyyy-MM-DDTHH:mm");

  return(
    <>
      <div className="eventModal">
        <div className="eventModal-part1">
          <img className="eventModal-img" src={imageModale} alt=""/>
        </div>
        <div className="eventModal-part3">
          <form className="eventModal-formevent" onSubmit={handleSubmit}>
            <h1 className="eventModal-titleform">Modifier l'évènement</h1>
            <div className="eventModal-titleformevent">
              <Field
                type="text"
                name="label"
                onChange={changefieldEvent}
                placeholder="Titre de l'évènement"
                value={label}
              />
            </div>
            <div className="eventModal-datehour">
              <Field
                type="datetime-local"
                name="date"
                onChange={changefieldEvent}
                value={dateSetUp}
              />
            </div>
            <Field
              type="text"
              name="address"
              onChange={changefieldEvent}
              placeholder="Adresse"
              value={address}
            />
            <div className="eventModal-codetown">
              <div className="eventModal-code">
                <Field
                  type="text"
                  name="number_address"
                  onChange={changefieldEvent}
                  placeholder="Code Postal"
                  value={number_address}
                />
              </div>
              <div className="eventModal-town">
                <Field
                  type="text"
                  name="town"
                  onChange={changefieldEvent}
                  placeholder="Ville"
                  value={town}
                />
              </div>
            </div>
            <Field
              type="number"
              name="max_player"
              onChange={changefieldEvent}
              placeholder="Nombre max de joueurs"
              value={max_player}
            />
            <div className="eventModal-textarea">
              <TextField 
                fullWidth={true}
                multiline
                rows={5}
                rowsMax={5}
                type="text"
                name="content"
                placeholder="Description de l'évènement..."
                onChange={handleOnChange}
                value={content}
              />
            </div>
            <button className="eventModal-btnformevent" type="submit">Valider</button>
            <FontAwesomeIcon onClick={handleClickClose} className="close_modal" icon={faTimes} />
          </form>
        </div>
      </div>
    </>
  );
}

EditEvent.propTypes = {
  handleEditEvent: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  number_address: PropTypes.number.isRequired,
  town: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  max_player: PropTypes.number.isRequired,
  changefieldEvent: PropTypes.func.isRequired,
  handleClickEndEditModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
