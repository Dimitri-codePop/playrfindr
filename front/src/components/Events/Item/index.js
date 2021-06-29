import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Modal from 'react-modal';
import { FindGoodGame } from 'src/selectors/find';
import Check from 'src/containers/Events/Item/Check';
import EditEvent from 'src/containers/Events/Item/EditEvent';
import moment from 'moment';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
 import momentTz from 'moment-timezone';
 import imageModale from 'src/assets/Imageevent.png'


Modal.setAppElement('#root');

import './style.scss';

export default function Item({
  events, 
  handleAddToEvent, 
  id,
  handleDeleteEvent,
  setUpEvent,
  reiniFormEvent,
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
    reiniFormEvent();
    setModalIdOpen(false);
  };
  const handleDelete = (event) => {
    handleDeleteEvent(event.target.value);
    setModalIdOpen(false);
  };
  const handleEdit = (event) => {
    setUpEvent(goodModal);
 
    setModalEditOpen(true);
  };
  const handleClickEndEditModal = () => {
    reiniFormEvent();
    setModalEditOpen(false);
    setModalIdOpen(false);
  };

  moment.locale('fr')
  const timeZone = 'Atlantic/Azores'



  const event = events.map((element) => {
    const momentDate = moment(element.date).tz(timeZone).format("dddd DD MMM YYYY")
    const momentHeure = moment(element.date).tz(timeZone).format("HH:mm")
    const test = (element.visitors[0].f1 == null) ? (1) : (element.visitors.length + 1);
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
      <p>{test}/{element.max_player}</p>  
      <div className="events__main__items--date">
        <p>{momentDate}</p>
        <p>{momentHeure}</p>
      </div>
      <div className="events__main__items--address">
      <p>{element.address}</p>
      <p>{element.number_address}</p>
      <p>{element.town}</p>
      </div>
      <a 
        className="events__main__items--linkprofil"
        href={path} >
          {element.creator_firstname} {element.creator_lastname}
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


//const position = [43.605450, 1.442740];
const position = [goodModal.latitude, goodModal.longitude]

  return(
        <div>
          {event}
          <Modal isOpen={modalIsOpen} className="customStylesEvent" onRequestClose={handleClickEndModal}>
            <div className="eventModal">
              <div className="eventModal-part1">
              <img className="eventModal-img" src={imageModale} alt=""/>
              </div>
              <div className="eventModal-part2">
                <div className="eventModal-head">
                  <h2 
                    className="eventModal-title">{goodModal.label}
                    { (goodModal.user_id == id) &&
                  <div className="all_btn">
                    <button onClick={handleEdit} value={goodModal.id}>
                    <FontAwesomeIcon className="edit_event" icon={faPen} />
                    </button>
                    <button onClick={handleDelete} value={goodModal.id}>
                      <FontAwesomeIcon className="close_delete" icon={faTrashAlt} />
                    </button>
                  </div>
                }
                  </h2>
                  <p className="eventModal-date">{moment(goodModal.date).tz(timeZone).format("dddd DD MMM YYYY à HH:mm")}</p>
                  <p className="eventModal-creator">Evènement créée par {goodModal.creator_firstname} {goodModal.creator_lastname}</p>
                  <p className="eventModal-content">{goodModal.content}</p>
                  {(goodModal) && 
                  <div className="eventModal-players">
                  <p className="eventModal-players--title">Participants inscrits</p>
                  {goodModal.visitors.map((visitor) => {
                    const pathname = `profil/${visitor.f1}`
                    return (
                      <a key={visitor.f1} href={pathname} className="eventModal-players--content">{visitor.f2} {visitor.f3}</a>
                  )})}
                  </div>
                  }
                  <FontAwesomeIcon onClick={handleClickEndModal} className="close_modal" icon={faTimes} />
                </div>            
                
                <div id="mapid">
                  <MapContainer className="map" center={position} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                      Place de la Bourse, Toulouse.
                    </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
          </Modal>
          <Modal isOpen={modalEditOpen} className="customStylesEvent" onRequestClose={handleClickEndEditModal}>
            <EditEvent 
              handleClickEndEditModal={handleClickEndEditModal}
              {...goodModal}
            />
          </Modal>
        </div>
        
  );
}

Item.propTypes = {
  events: PropTypes.array.isRequired,
  handleAddToEvent: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
  setUpEvent: PropTypes.func.isRequired,
  reiniFormEvent: PropTypes.func.isRequired,
};
