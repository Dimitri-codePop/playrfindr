import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Loading from 'src/components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faComment, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import moment from 'moment';
import imageModale from 'src/assets/Imageevent.png'

import './style.scss';

export default function Messages({
  proc,
  loadMessages,
  loading,
  messages,
  changefieldMessage,
  sendMessageContent,
  contentMessage,
  deleteMessageContent,
  
}) {
  const [modalMessage, setModalMessage] = useState(false);
  const [goodTargetId, setGoodTargetId] = useState('');

  useEffect(() => {
    loadMessages();
  }, [proc]);

  const openModalMessage = (event) => {
    setGoodTargetId(event.target.value);
    setModalMessage(true);
  };
  const handleEndModal = () => {
    setModalMessage(false);
  };
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    sendMessageContent(contentMessage, event.target.name);
    setShowMessage(!showMessage);
    setModalMessage(false);
  }
  const handleDeleteMessage = (event) => {
    deleteMessageContent(event.target.value)
  }

  const customStyles = {
    content : {
      backgroundColor       : 'white',
      position              : 'absolute',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    },
  };

  const allMessages = messages.map((message) => {
    console.log(`message.user_id`, message.user_id)
    const pathname = `/profil/${message.user_id}`;
    return (
    <div className="messages-item" key={message.date}> 
      <article className="messages-article">
        <div className="messages-text">{message.content}</div>
        <div className="messages-date">reçu le {moment(message.date).format("DD/MM/YY à HH:mm")}</div>
        <Link to={pathname} className="messages-name">
          <h2 >{message.firstname} {message.lastname}</h2>
        </Link>
        <div className="messages-icons">
          <button onClick={openModalMessage} value={message.user_id} className="messages-send">
            <FontAwesomeIcon
              className="iconSend"
              icon={faComment}
            />
          </button>
          <button onClick={handleDeleteMessage} value={message.id} className="messages-trash">
            <FontAwesomeIcon
              className="iconTrash"
              icon={faTrashAlt}
            />
          </button>
        </div>
      </article>
    </div>
    )
    });

  if (loading) {
    return <Loading />;
  }
  return(
    <main className="messages">
      <h1 className="messages-title">Ma boîte de réception</h1>
      <div className="messages-content">
      {allMessages}
      </div>
      <Modal 
        className="messages-modal" 
        isOpen={modalMessage} 
        onRequestClose={handleEndModal}
        style={customStyles}
      >
        <div className="eventModal">
          <div className="eventModal-part1">
          <img className="eventModal-img" src={imageModale} alt=""/>
          </div>
          <div className="eventModal-part2">
            <div className="eventModal-head">   
              <h1 className="eventModal-title">Ecrire un message</h1>
              <form className="messages-form" onSubmit={handleSubmitMessage} name={goodTargetId}>
              <Field
                  type="text"
                  name="contentMessage"
                  placeholder="Votre message..."
                  onChange={changefieldMessage}
                  value={contentMessage}
                  className="messages-field"
                />
                <button className="messages-btn" type="submit">Envoyer</button>
                <FontAwesomeIcon onClick={handleEndModal} className="close_modal" icon={faTimes} />
              </form>
              </div>
            </div>
        </div>
      </Modal>
    </main>
  );
}

Messages.propTypes = {};