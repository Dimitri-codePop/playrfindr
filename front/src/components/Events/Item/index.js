import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Modal from 'react-modal';
import { FindGoodGame } from 'src/selectors/find';
import Check from 'src/containers/Events/Item/Check';


Modal.setAppElement('#root');

import './style.scss';

export default function Item({
  events, 
  handleAddToEvent, 
  id,
  handleDeleteEvent,
}) {

  const {
    user_id,
  } = events

  

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
  const handleDelete = (event) => {
    handleDeleteEvent(event.target.value);
    setModalIdOpen(false);
  };

  const event = events.map((element) => {
    const path = `/profil/${element.user_id}`;
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
        < Check 
          handleClick={handleClick}
          name={element.id} 
          event={element}
          handleClickModal={handleClickModal}
        />
    </div>
    )
  });

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
            { (goodModal.user_id == id) && 
              <button onClick={handleDelete} value={goodModal.id}>
                <FontAwesomeIcon className="close_delete" icon={faTrashAlt} />
              </button>
            }
          </Modal>
        </div>
        
  );
}

Item.propTypes = {};
