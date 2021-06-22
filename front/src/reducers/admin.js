import {
  SAVE_ALL_USERS,
  SAVE_ALL_AUTHORS,
  SAVE_ALL_EDITORS,
} from 'src/actions/admin';

const initialState = {
  users: [],
  authors: [],
  editors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_USERS:
      return {
        ...state,
        users: [
          ...action.value,
        ]
        ,
      };
    case SAVE_ALL_AUTHORS:
      return {
        ...state,
        authors: [
          ...action.value,
        ]
        ,
      };
    case SAVE_ALL_EDITORS:
      return {
        ...state,
        editors: [
          ...action.value,
        ]
        ,
      };
    default:
      return state;
  }
};

export default reducer;
