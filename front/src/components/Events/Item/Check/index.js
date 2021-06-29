import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { visitorsInEvent } from 'src/selectors/find';

import './style.scss';

export default function Check({
  handleClick, 
  name, 
  event, 
  id,
  handleRemoveFromEvent,
  handleClickModal,
  goodModal,
}) {

  const [onEvent, setOnEvent] = useState (true);

  const handleClickCheck = (event) => {
    handleClick(event);
  };

  const userOnEvent = visitorsInEvent(event.visitors, id);

  const handleClickSetEvent = () => {
    setOnEvent(!onEvent);
  };

  const handleModalSetUp = (event) => {
    handleClickModal(event);
  };


  const handleRemove = (event) => {
    event.preventDefault();
    handleRemoveFromEvent(event.target.name);
    setOnEvent(!onEvent);
  };

  return(
    <>
    {((onEvent && !userOnEvent) && !((event.visitors.length + 1) >= event.max_player) && !(event.user_id == id)) &&
    <form className="custom-checkbox">
      <input 
        type="checkbox" 
        onChange={handleClickCheck} 
        name={name}
        className="events__main__items--icon"
        onClick={handleClickSetEvent}
      />
      <label htmlFor={name}>S'inscrire</label>
    </form>
    }
    {(!onEvent || userOnEvent) && !(event.user_id == id) &&
    <form className="custom-checkbox">
      <p className="events__main__items--inscription_text">Vous êtes inscrit a cet évènement</p>
      <button
        onClick={handleRemove}
        name={name}
      >
        Se désinscrire
      </button>
    </form>
    }
    {((event.visitors.length +1) >= event.max_player) && !userOnEvent &&
    <p className="events__main__items--full">Evènement complet</p>
    }
    {(event.user_id == id) &&
    <a 
      className="events__main__items--setup"
      onClick={handleModalSetUp}
      id={event.id}
    >
        Gérer mon event</a>
    }
    </>
  );
}

Check.propTypes = {
  handleClick: PropTypes.func.isRequired, 
  name: PropTypes.number.isRequired, 
  event: PropTypes.object.isRequired, 
  id: PropTypes.number.isRequired,
  handleRemoveFromEvent: PropTypes.func.isRequired,
  handleClickModal: PropTypes.func.isRequired,
};
