import { FindGoodEvent } from 'src/selectors/find';

import {
  SAVE_EVENTS,
  CHANGE_VALUE_EVENT,
  SAVE_NEW_EVENT,
  SAVE_ADD_TO_EVENT,
  SAVE_REMOVE_FROM_EVENT,
} from 'src/actions/events';

const initialState = {
  events: [],
  loading: true,
  id: '',
  label: '',
  date: '',
  address: '',
  number_address:'',
  town:'',
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
        address: action.address, 
        number_address: action.number_address, 
        town: action.town, 
        content: action.content, 
        max_player: action.max_player,
      };
    case SAVE_ADD_TO_EVENT: 
      return {
        ...state,
        events: FindGoodEvent(state.events, action.event)
      };
    case SAVE_REMOVE_FROM_EVENT:
      return {
        ...state,
        events: FindGoodEvent(state.events, action.event)
      };
    default:
      return state;
  }
};

export default reducer;
