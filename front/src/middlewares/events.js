import { 
  FETCH_EVENTS, 
  NEW_EVENT,
  ADD_TO_EVENT,
  REMOVE_FROM_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  saveEvents, 
  saveNewEvent,
  saveAddToEvent,
  saveRemoveFromEvent,
  saveRemoveEvent,
  saveEditEvent,
} from 'src/actions/events';
import axios from 'axios';

const events = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_EVENTS: {
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.get(`https://playrfindr.herokuapp.com/api/event`, { headers: {
        "Authorization": `${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }})
        .then((res) => {
          const actionFetchEvents = saveEvents(res.data.data);
          store.dispatch(actionFetchEvents);
        })
        .catch((error) => console.log('error :', error));

        break;
    }
    case NEW_EVENT: {
      const state = store.getState();
      axios.post('https://playrfindr.herokuapp.com/api/event',
      {
        user_id: state.user.id,
        label: state.events.label,
        date: state.events.date,
        address: state.events.address,
        number_address: state.events.number_address,
        town: state.events.town,
        content: state.events.content,
        max_player: state.events.max_player,
      },{ headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}
      )
        .then((response) => {
          const saveEventAction = saveNewEvent();
          store.dispatch(saveEventAction);
        })
        .catch((error) => console.log( error ) );
      break;
    }
    case ADD_TO_EVENT: {
      const state = store.getState();
      axios.post(`https://playrfindr.herokuapp.com/api/event/${action.value}`,
      {
        user_id: state.user.id,
      },{ headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}
      )
        .then((response) => {
          const event = response.data.data;
          const saveAddToEventAction = saveAddToEvent(event);
          store.dispatch(saveAddToEventAction);
        })
        .catch((error) => console.log( error ) );
      break;
    }
    case REMOVE_FROM_EVENT: {
      const state = store.getState();
      axios.patch(`https://playrfindr.herokuapp.com/api/event/${action.id}`,
      {
        user_id: state.user.id,
      },
      { headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }})
        .then((response) => {
          const event = response.data.data;
          const saveRemoveFromEventAction = saveRemoveFromEvent(event);
          store.dispatch(saveRemoveFromEventAction);
        })
        .catch((error) => console.log( error ) );
      break;
    }
    case DELETE_EVENT: {
      const state = store.getState();
      axios.delete(`https://playrfindr.herokuapp.com/api/event/${action.id}`,
      { headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }})
      .then((response) => {
        const saveRemoveEventAction = saveRemoveEvent();
        store.dispatch(saveRemoveEventAction);
      })
        .catch((error) => console.log( error ) );
      break;
    }
    case EDIT_EVENT: {
      const state = store.getState();
      axios.patch(`https://playrfindr.herokuapp.com/api/event/${action.id}/update`,
      {
        user_id: state.user.id,
        label: state.events.label,
        date: state.events.date,
        address: state.events.address,
        number_address: state.events.number_address,
        town: state.events.town,
        content: state.events.content,
        max_player: state.events.max_player,
      },{ headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}
      )
        .then(() => {
          const saveEditEventAction = saveEditEvent();
          store.dispatch(saveEditEventAction);
        })
        .catch((error) => console.log( error ) );
      break;
    }
    default:
      next(action);
  }
};

export default events;
