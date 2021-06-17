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
}) {

  const [onEvent, setOnEvent] = useState (true);

  const handleClickCheck = (event) => {
    handleClick(event);
  };

  const userOnEvent = event.userid.includes(id);

  const handleClickSetEvent = () => {
    setOnEvent(!onEvent);
  };


  const handleRemove = (event) => {
    event.preventDefault();
    handleRemoveFromEvent(event.target.name);
    setOnEvent(!onEvent);
  };

  return(
    <>
    {(onEvent && !userOnEvent) &&
    <form className="custom-checkbox">
      <input 
        type="checkbox" 
        onChange={handleClickCheck} 
        name={name}
        className="events__main__items--icon"
        onClick={handleClickSetEvent}
      />
    </form>
    }
    {(!onEvent || userOnEvent ) &&
    <form className="custom-checkbox">
      <button
        onClick={handleRemove}
        name={name}
      >
        Se désinscrire
      </button>
    </form>
    }
    </>
  );
}

Check.propTypes = {};
