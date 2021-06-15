import { LOGIN, saveUser, SIGN_UP } from 'src/actions/user';
import axios from 'axios';

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('https://playrfindr.herokuapp.com/api/connexion', {
        email: state.user.email,
        password: state.user.password,
      })
      .then((response) => {
        const {
          firstname,
          lastname,
          email,
          id,
          birthdate,
          token,
          department_number,
          department_label
          
        } = response.data;
        const { isLogged } = response.data;
        const saveUserAction = saveUser(id,token, email, department_number, department_label, isLogged, firstname, lastname, birthdate);
        store.dispatch(saveUserAction);
      })
      .catch((error) => console.log(`error`, error));
      break;
    }
    case SIGN_UP: {
      const state = store.getState();
      axios.post('https://playrfindr.herokuapp.com/api/inscription', {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        email: state.user.email,
        password: state.user.password,
        passwordConfirm: state.user.passwordConfirm,
        birthdate: state.user.birthdate,
        department_id: state.user.departement[0],
        theme_id: state.user.themes,
        category_id: state.user.categories,
      })
        .then((response) => {
          console.log(response);
          const { data } = response;
          const saveUserAction = saveUser(data);
          store.dispatch(saveUserAction);
        })
        .catch((error) => console.log( error ) );
      break;
    }
    default:
      next(action);
  }
};

export default login;
