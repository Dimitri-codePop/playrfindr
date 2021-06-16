import { 
  FETCH_EVENTS, 
  NEW_EVENT,
  ADD_TO_EVENT,
  saveEvents, 
  saveNewEvent,
  saveAddToEvent,
} from 'src/actions/events';
import axios from 'axios';

const events = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_EVENTS: {
      axios.get(`https://playrfindr.herokuapp.com/api/event`, { headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }})
        .then((res) => {
          console.log(`eventsMW`, res.data.data)
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
        location: state.events.location,
        content: state.events.content,
        max_player: state.events.max_player,
      },{ headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}
      )
        .then((response) => {
          console.log(response);
          const { data } = response;
          const saveEventAction = saveNewEvent(data);
          store.dispatch(saveEventAction);
        })
        .catch((error) => console.log( error ) );
      break;
    }
    case ADD_TO_EVENT: {
      const state = store.getState();
      axios.post(`https://playrfindr.herokuapp.com/api/event/${action.id}`,
      {
        user_id: state.user.id,
      },{ headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}
      )
        .then((response) => {
          console.log(response.data.data);
          const event = response.data.data;
          const saveAddToEventAction = saveAddToEvent(event);
          store.dispatch(saveAddToEventAction);
        })
        .catch((error) => console.log( error ) );
      break;
    }
    default:
      next(action);
  }
};

export default events;
