import { 
  SEND_MESSAGE, 
  FETCH_MESSAGES, 
  saveMessages ,
  DELETE_MESSAGE,
} from 'src/actions/messages';
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
          console.log(res)
        })
        .catch((error) => console.log('error :', error));

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
          console.log(res)
        })
        .catch((error) => console.log('error :', error));

        break;
    }
    default:
      next(action);
  }
};

export default messages;
