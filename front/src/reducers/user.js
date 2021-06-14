import {
  SAVE_USER,
  CHANGE_VALUE_LOGIN,
  CHANGE_VALUE_SIGNUP,
} from 'src/actions/user';


const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  departement: '',
  id: '',
  firstname: '',
  lastname: '',

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
        confirmPassword: '',
      };
    case CHANGE_VALUE_SIGNUP: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
