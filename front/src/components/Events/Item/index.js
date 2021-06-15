import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import events from 'src/data/event';
import Modal from 'react-modal';
import { FindGoodGame } from 'src/selectors/find';

Modal.setAppElement('#root');

import './style.scss';

export default function Item() {

  const [modalIsOpen, setModalIdOpen] = useState (false);
  const [goodModal, setGoodModal] = useState ('');

  const handleClick = (event) => {
    console.log(event.target.name)
  };

  const handleClickModal = (event) => {
    setModalIdOpen(true);
    setGoodModal(FindGoodGame(events.event, event.target.id))
  };
  const handleClickEndModal = () => {
    setModalIdOpen(false);
  };

  const event = events.event.map((element) => {
    const path = `/profil/${element.users[0].id}`;
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
      <p>{element.users.length}/{element.nb_maxplayer}</p>
      <p>{element.date}</p>
      <p>{element.lieu}</p>
      <a 
        className="events__main__items--linkprofil"
        href={path} >
          {element.users[0].label}
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
            <p>{goodModal.lieu}</p>
            <p>{goodModal.date}</p>
            <h3>Infos Complémentaires</h3>
            <p>{goodModal.content}</p>
            <FontAwesomeIcon onClick={handleClickEndModal} className="close_modal" icon={faTimes} />
          </Modal>
        </div>
  );
}

Item.propTypes = {};
