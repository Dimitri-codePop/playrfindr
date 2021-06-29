import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import imageModale from 'src/assets/Imageevent.png'
import TextField from '@material-ui/core/TextField';

import './style.scss';

export default function FormEvent({
  handleEndModal,
  label,
  date,
  address,
  number_address,
  town,
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

  const handleOnChange = (event) => {
    changefieldEvent(event.target.value, event.target.name);
  };

  return(
    <>
        <div className="eventModal">
          <div className="eventModal-part1">
            <img className="eventModal-img" src={imageModale} alt=""/>
          </div>
          <div className="eventModal-part3">
            <form className="eventModal-formevent" onSubmit={handleSubmit}>
              <h1 className="eventModal-titleform">Créer un évènement</h1>
              <div className="eventModal-titleformevent">
                <Field
                  type="text"
                  name="label"
                  placeholder="Titre de l'évènement"
                  onChange={changefieldEvent}
                  value={label}
                />
              </div>
              <div className="eventModal-datehour">
                <Field
                  type="datetime-local"
                  name="date"
                  placeholder=""
                  onChange={changefieldEvent}
                  value={date}
                />
              </div>
              <Field
                type="text"
                name="address"
                placeholder="Adresse"
                onChange={changefieldEvent}
                value={address}
              />
              <div className="eventModal-codetown">
                <div className="eventModal-code">
                  <Field
                    type="text"
                    name="number_address"
                    placeholder="Code Postal"
                    onChange={changefieldEvent}
                    value={number_address}
                  />
                </div>
                <div className="eventModal-town">
                  <Field
                    type="text"
                    name="town"
                    placeholder="Ville"
                    onChange={changefieldEvent}
                    value={town}
                  />
                </div>
              </div>
              <Field
                type="number"
                name="max_player"
                placeholder="Nombre de joueurs max"
                onChange={changefieldEvent}
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
              <button className="eventModal-btnformevent" type="submit">Créer</button>
              <FontAwesomeIcon onClick={handleEndModal} className="close_modal" icon={faTimes} />
            </form>
          </div>
        </div>
    </>
  );
}

FormEvent.propTypes = {
  handleEndModal: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  number_address: PropTypes.string,
  town: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  max_player: PropTypes.string.isRequired,
  changefieldEvent: PropTypes.func.isRequired,
  handleNewEvent: PropTypes.func.isRequired,
};

FormEvent.defaultProps = {
  number_address: "1",
};

        
