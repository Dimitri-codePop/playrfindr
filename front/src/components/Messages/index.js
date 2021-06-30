import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Loading from 'src/components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faComment, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import moment from 'moment';
import imageModale from 'src/assets/Imageevent.png'
import TextField from '@material-ui/core/TextField';

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
    sendMessageContent(contentMessage, event.target.name)
    setModalMessage(false);
  }
  const handleDeleteMessage = (event) => {
    deleteMessageContent(event.target.value)
  }
  const handleOnChange = (event) => {
    changefieldMessage(event.target.value, event.target.name)
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
      height                : '50%',
      transform             : 'translate(-50%, -50%)',
    },
  };

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
        className="customStylesMsg" 
        isOpen={modalMessage} 
        onRequestClose={handleEndModal}
      >
        <div className="eventModal">
          <div className="eventModal-part1">
          <img className="eventModal-img" src={imageModale} alt=""/>
          </div>
          <div className="eventModal-part2">
            <div className="messages-head">   
              <h1 className="messages-titlemodal">Ecrire un message</h1>
              <form className="messages-form" onSubmit={handleSubmitMessage} name={goodTargetId}>
              <div className="messages-textmodal">
              <TextField 
                  fullWidth={true}
                  multiline
                  rows={5}
                  rowsMax={5}
                  type="text"
                  name="contentMessage"
                  placeholder="Votre message..."
                  onChange={handleOnChange}
                  value={contentMessage}
                />
              </div>
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
