
import {
  SAVE_EVENTS,
  CHANGE_VALUE_EVENT,
  SAVE_NEW_EVENT,
  SAVE_ADD_TO_EVENT,
} from 'src/actions/events';

const initialState = {
  events: [],
  loading: true,
  id: '',
  label: '',
  date: '',
  location: '',
  content: '',
  max_player: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    case SAVE_EVENTS:
      return {
        ...state,
        events: [...action.events],
        loading: false,
      }
    case CHANGE_VALUE_EVENT: 
      return {
        ...state,
        [action.key]: action.value,
      };
    case SAVE_NEW_EVENT:
      return {
        ...state,
        label: action.label, 
        date: action.date, 
        location: action.location, 
        content: action.content, 
        max_player: action.max_player,
      };
    case SAVE_ADD_TO_EVENT: 
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
