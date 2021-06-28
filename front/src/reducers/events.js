import { FindGoodEvent } from 'src/selectors/find';

import {
  SAVE_EVENTS,
  CHANGE_VALUE_EVENT,
  SAVE_NEW_EVENT,
  SAVE_ADD_TO_EVENT,
  SAVE_REMOVE_FROM_EVENT,
  SAVE_EDIT_EVENT,
  EDIT_VALUE_EVENT,
  SET_EVENT,
  SAVE_REMOVE_EVENT,
  REINI_EVENT,
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
  lat: '',
  long: '',
  trigger: true,
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
    case EDIT_VALUE_EVENT: 
      return {
        ...state,
        [action.key]: action.value,
      };
    case SAVE_NEW_EVENT:
      return {
        ...state,
        trigger: !(state.trigger)
      };
    case SAVE_ADD_TO_EVENT: 
      return {
        ...state,
        events: FindGoodEvent(state.events, action.event),
        trigger: !(state.trigger)
      };
    case SAVE_REMOVE_FROM_EVENT:
      return {
        ...state,
        events: FindGoodEvent(state.events, action.event),
        trigger: !(state.trigger)
      };
    case SAVE_EDIT_EVENT:
      return {
        ...state,
        label: '',
        date: '', 
        address: '', 
        number_address: '', 
        town: '', 
        content: '',
        max_player: '',
        trigger: !state.trigger,
      };
    case SET_EVENT:
      return {
        ...state,
        label: action.event.label, 
        date: action.event.date, 
        address: action.event.address, 
        number_address: action.event.number_address, 
        town: action.event.town, 
        content: action.event.content,
        max_player: action.event.max_player,
        trigger: !(state.trigger)
        };
    case SAVE_REMOVE_EVENT:
      return {
        ...state,
        trigger: !(state.trigger),
        };
    case REINI_EVENT:
      return {
        ...state,
        label: '',
        date: '', 
        address: '', 
        number_address: '', 
        town: '', 
        content: '',
        max_player: '',
        trigger: !state.trigger,
      };
    default:
      return state;
  }
};

export default reducer;
