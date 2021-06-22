import {
  SAVE_ALL_USERS,
  SAVE_ALL_AUTHORS,
  SAVE_ALL_EDITORS,
  SAVE_AFTER_DELETE,
  SAVE_ALL_TYPE,
  SAVE_ELEMENTS_TYPE,
} from 'src/actions/admin';

const initialState = {
  users: [],
  author: [],
  editor: [],
  jeux: [],
  event: [],
  theme: [],
  category: [],
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
        author: [
          ...action.value,
        ]
        ,
      };
    case SAVE_ALL_EDITORS:
      return {
        ...state,
        editor: [
          ...action.value,
        ]
        ,
      };
    case SAVE_AFTER_DELETE:
      return {
        ...state,
        [action.key]: [...action.value],
      };
    case SAVE_ALL_TYPE:
      return {
        ...state,
        jeux: [...action.games],
        category: [...action.categories],
        theme: [...action.themes],
        event: [...action.events],
      };
    case SAVE_ELEMENTS_TYPE:
      return {
        ...state,
        [action.key]: [
          ...[action.key],
          action.value,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
