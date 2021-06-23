import {
  SAVE_ALL_USERS,
  SAVE_ALL_AUTHORS,
  SAVE_ALL_EDITORS,
  SAVE_AFTER_DELETE,
  SAVE_ALL_TYPE,
  SAVE_ELEMENTS_TYPE,
  SAVE_EDIT_TYPE_FIELD,
  CHANGE_ADD_TYPE_FIELD,
} from 'src/actions/admin';

const initialState = {
  users: [],
  author: [],
  editor: [],
  jeux: [],
  event: [],
  theme: [],
  category: [],
  new: {
    editor: '',
    theme: '',
    category: '',
    jeux: {},
    user: {},
    author: {},
  },
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
    case SAVE_AFTER_DELETE: {
      const tab = state[action.key];
      console.log(`tab`, tab);
      const newTab = tab.filter((entry) => Number(entry.id) !== Number(action.value));
      console.log(`newTab`, newTab);
      return {
        ...state,
        [action.key]: [...newTab],
      };
    }
    case SAVE_ALL_TYPE: {
      return {
        ...state,
        jeux: [...action.games],
        category: [...action.categories],
        theme: [...action.themes],
        event: [...action.events],
      };}
    case SAVE_ELEMENTS_TYPE:
      return {
        ...state,
        [action.key]: [
          ...state[action.key],
          action.value,
        ],
      };
    case SAVE_EDIT_TYPE_FIELD: {
      const tab = state[action.key];
      console.log(`action.value`, action.value);
      console.log(action.value.id);
      const newTab = tab.map((entry) => {
        if (Number(entry.id) === Number(action.value.id)) {
          entry.label = action.value.label;
        }
        return entry;
      });
      return {
        ...state,
        [action.key]: [
          ...newTab,
        ],
      };
    }
    case CHANGE_ADD_TYPE_FIELD:
      return {
        ...state,
        new: {
          ...state.new,
          [action.key]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
