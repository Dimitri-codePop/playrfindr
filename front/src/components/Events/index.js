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
  id,
}) {

  

  useEffect(() => {
    loadEvents();
  }, [events.firstname]);

  console.log(`events`, events)
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const handleEndModal = () => {
    setModal(false);
  };

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
            <li className="events__main__nav--mainItem">Evenement</li>
            <li className="events__main__nav--item">Nb de joueurs</li>
            <li className="events__main__nav--item">Date/heure</li>
            <li className="events__main__nav--item">Adresse</li>
            <li className="events__main__nav--item">Crée par</li>
            <li className="events__main__nav--item">S'inscrire</li>
          </ul>
        </nav> 
      < Item events={events}/>
      <Modal isOpen={modal}>
        < FormEvent 
          handleEndModal={handleEndModal} 
          id={id}
        />
      </Modal>
      </div>
    </main>
  );
}

Events.propTypes = {};
