import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { FindGoodGame } from 'src/selectors/find';

Modal.setAppElement('#root');

import './style.scss';

export default function Item({events, handleAddToEvent}) {

  const {
    user_id,
  } = events

  console.log(`participant`, events.participant)

  const [modalIsOpen, setModalIdOpen] = useState (false);
  const [goodModal, setGoodModal] = useState ('');

  const handleClick = (event) => {
    handleAddToEvent(event.target.name);
  };

  const handleClickModal = (event) => {
    setModalIdOpen(true);
    setGoodModal(FindGoodGame(events, event.target.id))
  };
  const handleClickEndModal = () => {
    setModalIdOpen(false);
  };

  const event = events.map((element) => {
    const path = `/profil/${user_id}`;
    return(
    <div key={element.id} className="events__main__items">
      <a 
        href="#" 
        onClick={handleClickModal} 
        className="events__main__items--mainItem"
        id={element.id}
        >
        {element.label}
      </a>
      <p>{element.firstname.length}/{element.max_player}</p>
      <p>{element.date}</p>
      <p>{element.location}</p>
      <a 
        className="events__main__items--linkprofil"
        href={path} >
          {element.firstname[0]} {element.lastname[0]}
      </a>
      <form className="custom-checkbox">
          <input 
            type="checkbox" 
            onChange={handleClick} 
            name={element.id} 
            className="events__main__items--icon"
          />
      </form>

    </div>
    )
  })
  return(
        <div>
          {event}
          <Modal isOpen={modalIsOpen}>
            <h2>{goodModal.label}</h2>
            <p>{goodModal.location}</p>
            <p>{goodModal.date}</p>
            <h3>Infos Complémentaires</h3>
            <p>{goodModal.content}</p>
            <FontAwesomeIcon onClick={handleClickEndModal} className="close_modal" icon={faTimes} />
          </Modal>
        </div>
  );
}

Item.propTypes = {};
