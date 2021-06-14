import {
  SAVE_USER,
  CHANGE_VALUE_LOGIN,
  CHANGE_VALUE_SIGNUP,
  CHANGE_VALUE_SIGNUP_SELECT,
} from 'src/actions/user';


const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  departement: '',
  id: '',
  firstname: '',
  lastname: '',
  departement: '',
  themes: [],
  categories: [],
  isLogged: false,

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
        isLogged: action.logged,
        departement: action.departement,
        firstname: action.firstname,
        lastname: action.lastname,
        email: state.login.email,
        id: action.id,
        password: '',
        passwordConfirm: '',
      };
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
      }
    }
    default:
      return state;
  }
};

export default reducer;
