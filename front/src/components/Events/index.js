import React, { useState } from 'react'
import Proptypes from 'prop-types'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

import Item from 'src/containers/Events/Item';

import './style.scss';

export default function Events() {

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const handleEndModal = () => {
    setModal(false);
  };

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
            <li className="events__main__nav--item">Dptm</li>
            <li className="events__main__nav--item">Crée par</li>
            <li className="events__main__nav--item">S'inscrire</li>
          </ul>
        </nav> 
      < Item />
      <Modal isOpen={modal}>
        <form>
          <h1>Créer un évènement</h1>
          <input type="text" placeholder="Titre de l'évènement"/>
          <input type="date" placeholder="Date"/>
          <input type="number" placeholder="Département"/>
          <input type="text" placeholder="Description de l'évènement..."/>
          <button type="submit">Créer</button>
          <FontAwesomeIcon onClick={handleEndModal} className="close_modal" icon={faTimes} />
        </form>
      </Modal>
      </div>
    </main>
  );
}

Events.propTypes = {};
