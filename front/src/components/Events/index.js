import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Loading from 'src/components/Loading'


Modal.setAppElement('#root');

import Item from 'src/containers/Events/Item';
import FormEvent from 'src/containers/Events/FormEvent';

import './style.scss';

export default function Events({
  events, 
  loadEvents, 
  loading,
  trigger,
  reiniFormEvent,
}) {

  console.log(`trigger1`, trigger)
  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    loadEvents();
  }, [trigger]);

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const handleEndModal = () => {

    setModal(false);
  };

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      height                : '80%',
      transform             : 'translate(-50%, -50%)',
    },
  };

  console.log(`trigger2`, trigger)
  if (loading) {
    return <Loading />;
  }
  return(
    <main className="events">
      <h1 className="events__title">Evenements</h1>
      <a 
      href="#"
      className="events__create"
      onClick={handleModal}>
        Créer un évènement
      </a>
      <div className="events__main">
        <nav className="events__main__nav">
          <ul className="events__main__nav--list">
            <li className="events__main__nav--mainItem">Evenements</li>
            <li className="events__main__nav--item">Nb de joueurs</li>
            <li className="events__main__nav--item">Date/heure</li>
            <li className="events__main__nav--item">Adresse</li>
            <li className="events__main__nav--item">Crée par</li>
            <li className="events__main__nav--item">S'inscrire</li>
          </ul>
        </nav> 
      < Item 
        events={events}
        reiniFormEvent={reiniFormEvent}
      />
      <Modal isOpen={modal} style={customStyles} onRequestClose={handleEndModal}>
        < FormEvent 
          handleEndModal={handleEndModal} 
          
        />
      </Modal>
      </div>
    </main>
  );
}

Events.propTypes = {};
