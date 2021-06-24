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

import './style.scss';

export default function Messages({
  loadMessages,
  loading,
  messages,
  changefieldMessage,
  sendMessageContent,
  contentMessage,
  deleteMessageContent,
  
}) {
  const [modalMessage, setModalMessage] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const openModalMessage = () => {
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

  const allMessages = messages.map((message) => {
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
          <FontAwesomeIcon
            className="messages-send"
            icon={faComment}
            onClick={openModalMessage}
          />
          <button onClick={handleDeleteMessage} value={message.id} className="messages-trash">
            <FontAwesomeIcon
              className="iconTrash"
              icon={faTrashAlt}
            />
          </button>
        </div>
      </article>
      <Modal className="messages-modal" isOpen={modalMessage}>
      <form className="messages-form" onSubmit={handleSubmitMessage} name={message.user_id}>
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
        </Modal>
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
    </main>
  );
}

Messages.propTypes = {};
