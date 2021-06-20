import React, {useState} from 'react'
import Proptypes from 'prop-types'
import { FindGoodGame } from 'src/selectors/find';

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

  const userOnEvent = event.userid.includes(id);

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
    {(onEvent && !userOnEvent && !(event.firstname.length >= event.max_player) && !(event.userid == id)) &&
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
    {(!onEvent || userOnEvent ) && !(event.user_id == id) &&
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
    {(event.firstname.length >= event.max_player && !userOnEvent) &&
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

Check.propTypes = {};
