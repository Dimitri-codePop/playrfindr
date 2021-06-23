import {
  SAVE_ALL_USERS,
  SAVE_ALL_AUTHORS,
  SAVE_ALL_EDITORS,
  SAVE_AFTER_DELETE,
  SAVE_ALL_TYPE,
  SAVE_ELEMENTS_TYPE,
  SAVE_EDIT_TYPE_FIELD,
  CHANGE_ADD_TYPE_FIELD,
  CHANGE_AUTHOR_FIELD,
  SAVE_EDIT_AUTHOR,
  SAVE_ADD_AUTHOR,
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
    author: {
      firstname: '',
      lastname: '',
    },
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
    case CHANGE_AUTHOR_FIELD:
      return {
        ...state,
        new: {
          ...state.new,
          author: {
            ...state.new.author,
            [action.key]: action.value,
          },
        },
      };
    case SAVE_ADD_AUTHOR:
      return {
        ...state,
        author: [...state.author, action.value],
      };
    case SAVE_EDIT_AUTHOR: {
      const tab = state.author;
      const newTab = tab.map((entry) => {
        if (Number(entry.id) === Number(action.value.id)) {
          entry.firstname = action.value.firstname;
          entry.lastname = action.value.lastname;
        }
        return entry;
      });
      return {
        ...state,
        author: [...newTab],
        new: {
          ...state.new,
          author: {
            firstname: '',
            lastname: '',
          },
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
