import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Modal from 'react-modal';
import { FindGoodGame } from 'src/selectors/find';
import Check from 'src/containers/Events/Item/Check';
import EditEvent from 'src/containers/Events/Item/EditEvent';
import moment from 'moment';


Modal.setAppElement('#root');

import './style.scss';

export default function Item({
  events, 
  handleAddToEvent, 
  id,
  handleDeleteEvent,
  setUpEvent,
}) {

  const {
    user_id,
  } = events

  

  const [modalIsOpen, setModalIdOpen] = useState (false);
  const [modalEditOpen, setModalEditOpen] = useState (false);
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
  const handleEdit = (event) => {
    setUpEvent(goodModal);
    setModalEditOpen(true);
    console.log(event.target.value);
  };
  const handleClickEndEditModal = () => {
    setModalEditOpen(false);
  };

  moment.locale('fr')

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
      <p>{moment(element.date).format("ddd MM YYYY / HH:mm")}</p>
      <div className="events__main__items--address">
      <p>{element.address}</p>
      <p>{element.number_address}</p>
      <p>{element.town}</p>
      </div>
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
            <p>{moment(goodModal.date).format("dddd MM YYYY à HH:mm")}</p>
            <h3>Infos Complémentaires</h3>
            <p>{goodModal.content}</p>
            <FontAwesomeIcon onClick={handleClickEndModal} className="close_modal" icon={faTimes} />
            { (goodModal.user_id == id) && 
              <div className="all_btn">
                <button onClick={handleDelete} value={goodModal.id}>
                  <FontAwesomeIcon className="close_delete" icon={faTrashAlt} />
                </button>
                <button onClick={handleEdit} value={goodModal.id}>
                <FontAwesomeIcon className="edit_event" icon={faPen} />
                </button>
              </div>
            }
          </Modal>
          <Modal isOpen={modalEditOpen}>
            <EditEvent 
              handleClickEndEditModal={handleClickEndEditModal}
              {...goodModal}
            />
          </Modal>
        </div>
        
  );
}

Item.propTypes = {};
