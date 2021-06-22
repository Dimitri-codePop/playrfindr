
import {
  CHANGE_VALUE_MESSAGE,
} from 'src/actions/messages';

const initialState = {
  contentMessage:'',
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    case CHANGE_VALUE_MESSAGE:
      return {
        ...state,
        [action.key]: [action.value],
      };
    default:
      return state;
  }
};

export default reducer;
