
import {
  CHANGE_VALUE_MESSAGE,
  SAVE_MESSAGES,
  SAVE_DEL_MSG,
} from 'src/actions/messages';

const initialState = {
  contentMessage:'',
  loading: true,
  messages:[],
  proc: true,
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
    case SAVE_DEL_MSG:
      return {
        ...state,
        proc: !state.proc,
      };
    default:
      return state;
  }
};

export default reducer;
