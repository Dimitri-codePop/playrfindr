import {
  SHOW_EDIT_PASSWORD_MESSAGE,
  SHOW_LOGIN_MESSAGE,
  SHOW_LOGOUT_MESSAGE,
  SHOW_ADD_GAME_TO_LIB_MESSAGE,
} from 'src/actions/systemMessages';

const initialState = {
  message: '',
  isOk: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_EDIT_PASSWORD_MESSAGE:
      return {
        ...state,
        message: action.value,
        isOk: action.key,
      };
    case SHOW_LOGIN_MESSAGE:
      return {
        ...state,
        message: action.value,
        isOk: action.key,
      };
    case SHOW_LOGOUT_MESSAGE:
      return {
        ...state,
        message: action.value,
        isOk: action.key,
      };
    case SHOW_ADD_GAME_TO_LIB_MESSAGE:
      console.log("log reducers", action.value, action.key);
      return {
        ...state,
        message: action.value,
        isOk: action.key,
      }
    default:
      return state;
  }
};

export default reducer;
