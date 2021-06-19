import {
  SHOW_EDIT_PASSWORD_MESSAGE,
  SHOW_LOGIN_MESSAGE,
  SHOW_LOGOUT_MESSAGE,

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
    default:
      return state;
  }
};

export default reducer;
