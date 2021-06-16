import {
  SAVE_USER,
  CHANGE_VALUE_LOGIN,
  CHANGE_VALUE_SIGNUP,
  CHANGE_VALUE_SIGNUP_SELECT,
  SAVE_DEPARTEMENTS,
} from 'src/actions/user';


const initialState = {
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
  departements: [],
  themes: [],
  categories: [],

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
      };
    case SAVE_DEPARTEMENTS:
      return {
        ...state,
        departements: [...state.departements, ...action.value],
      }
    case CHANGE_VALUE_SIGNUP: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case CHANGE_VALUE_SIGNUP_SELECT: {
      let newState= {
        ...state,
      };
      if (!state[action.key].length) {
        return (
          newState = {
            ...state,
            [action.key]: [...state[action.key], Number(action.value)],
          }
        )
      } else if (!state[action.key].includes(Number(action.value))) {
        return (
          newState = {
            ...state, 
            [action.key]: [...state[action.key], Number(action.value)],
          }
        )
      }
      return {
        ...newState,
      }
    }
    default:
      return state;
  }
};

export default reducer;
