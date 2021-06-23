
import {
  CHANGE_VALUE_MESSAGE,
  SAVE_MESSAGES
} from 'src/actions/messages';

const initialState = {
  contentMessage:'',
  loading: true,
  messages:[],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    case SAVE_MESSAGES:
      return {
        ...state,
        messages: [...action.value],
      };
    case CHANGE_VALUE_MESSAGE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
