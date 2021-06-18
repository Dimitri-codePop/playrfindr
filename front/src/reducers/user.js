import {
  SAVE_USER,
  CHANGE_VALUE_LOGIN,
  CHANGE_VALUE_SIGNUP,
  CHANGE_VALUE_SIGNUP_SELECT,
  SAVE_DEPARTEMENTS,
  KILL_CURRENT_USER,
  SHOW_PROFIL,
  CHANGE_VALUE_EDIT_USER,
  CHANGE_VALUE_SELECT_EDIT_USER,
  DELETE_SELECT_FIELD_USER,
  DELETE_SELECT_FIELD_SIGNUP_USER,
} from 'src/actions/user';

const initialState = {
  id: 0,
  email: '',
  firstname: '',
  lastname: '',
  password: '',
  passwordConfirm: '',
  oldPassword: '',
  birthdate: '',
  department_number: '',
  department_label: '',
  token: '',
  isLogged: false,
  departement: '',
  departements: [],
  themes: [],
  categories: [],
  profil: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_LOGIN: {
      // console.log('action.key', action.key, '/ value :', action.value);
      // console.log(state.login);
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case SAVE_USER:
      return {
        ...state,
        token: action.token,
        id: action.id,
        department_label: action.department_label,
        department_number: action.department_number,
        birthdate: action.birthdate,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        password: '',
        passwordConfirm: '',
        isLogged: action.isLogged,
        loading: true,
      };
    case SAVE_DEPARTEMENTS:
      return {
        ...state,
        departements: [...state.departements, ...action.value],
      };
    case CHANGE_VALUE_SIGNUP: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case CHANGE_VALUE_SIGNUP_SELECT: {
      let newState = {
        ...state,
      };
      if (!state[action.key].length) {
        return (
          newState = {
            ...state,
            [action.key]: [...state[action.key], action.value],
          }
        )
      } else if (!state[action.key].includes(action.value)) {
        return (
          newState = {
            ...state,
            [action.key]: [...state[action.key], action.value],
          }
        )
      }
      return {
        ...newState,
      };
    }
    case CHANGE_VALUE_SELECT_EDIT_USER: {
      let newState = {
        ...state,
      };
      console.log('ici', action.key, action.value);
      if (!state.profil[action.key].length) {
      console.log('ici', action.key, action.value);
        return (
          newState = {
            ...state,
            profil: {
              ...state.profil,
              [action.key]: [...state.profil[action.key], action.value],
            }
          }
        )
      } else if (!state.profil[action.key].includes(action.value)) {
        return (
          newState = {
            ...state,
            profil: {
              ...state.profil,
              [action.key]: [...state.profil[action.key], action.value],
            }
          }
        )
      }
      return {
        ...newState,
      };
    }
    case KILL_CURRENT_USER: {
      return {
        ...state,
        id: 0,
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        passwordConfirm: '',
        birthdate: '',
        department_number: '',
        department_label: '',
        token: '',
        isLogged: false,
        departement: '',
      };
    }
    case SHOW_PROFIL: {
      return {
        ...state,
        profil: action.value,
        loading: false,
      };
    }
    case CHANGE_VALUE_EDIT_USER: {
      return {
        ...state,
        profil: {
          ...state.profil,
          [action.key]: action.value,
        },
      };
    }
    case DELETE_SELECT_FIELD_SIGNUP_USER: {
      let tab = [...state[action.key]];
      console.log(tab);
      tab = tab.filter((obj) => obj !== action.value);
      console.log(action.value, action.key, tab);
      let newState = {
        ...state,
        [action.key]: [...tab],
      };
      return {
        ...newState,
      };
    }
    case DELETE_SELECT_FIELD_USER: {
      let tab = [...state.profil[action.key]];
      console.log(tab);
      tab = tab.filter((obj) => obj !== action.value);
      console.log('ici', action.key, action.value, tab);
      let newState = {
        ...state,
        profil: {
          ...state.profil,
          [action.key]: [...tab],
        },
      };
      return {
        ...newState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
