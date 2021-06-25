import { 
  SEND_MESSAGE, 
  FETCH_MESSAGES, 
  saveMessages ,
  DELETE_MESSAGE,
  saveDelMsg,
} from 'src/actions/messages';
import {
  messageSend
} from 'src/actions/systemMessages';
import axios from 'axios';


const messages = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_MESSAGES: {
      console.log("hello")
      axios.get(`https://playrfindr.herokuapp.com/api/messagerie`,
      { headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}
      )
        .then((res) => {
          console.log(`messageMW`, res.data.data)
          const actionFetchMessages = saveMessages(res.data.data);
          store.dispatch(actionFetchMessages);
        })
        .catch((error) => console.log('error :', error));

        break;
    }
    case SEND_MESSAGE: {
      axios.post(`https://playrfindr.herokuapp.com/api/messagerie/${action.id}`,
      {
        content: action.message,
      },{ headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}
      )
        .then((res) => {
          console.log('Ici ?', res);
          const message = 'Le message a bin été envoyé.';
          const isOk = true;
          const actionmessageSend = messageSend(message, isOk);
          store.dispatch(actionmessageSend);
        })
        .catch((error) => {
          console.log('error :', error)
          console.log('errot', error);
          const message = "Une erreur s'est produite, veuillez réessayer plus tard !";
          const isOk = false;
          const actionmessageSend = messageSend(message, isOk);
          store.dispatch(actionmessageSend);
        });

        break;
    }
    case DELETE_MESSAGE: {
      axios.delete(`https://playrfindr.herokuapp.com/api/message/${action.id}`,
      { headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}
      )
        .then((res) => {
          const actionDelMsg = saveDelMsg();
          store.dispatch(actionDelMsg);
        })
        .catch((error) => console.log('error :', error));

        break;
    }
    default:
      next(action);
  }
};

export default messages;
