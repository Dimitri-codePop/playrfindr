import { LOGIN, saveUser, SIGN_UP } from 'src/actions/user';
import axios from 'axios';

const login = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      console.log(state);
      axios.post('https://playrfindr.herokuapp.com/api/connexion', {
        email: state.user.email,
        password: state.user.password,
      })
      .then((response) => {
        const {
          firstName,
          lastName,
          email,
          departement,
          id,
        } = response.data.user;
        const { isLogged } = response.data;
        const saveUserAction = saveUser(id, email, departement, isLogged, firstName, lastName);
        store.dispatch(saveUserAction);
      })
      .catch((error) => console.log(`error`, error));
      break;
    }
    case SIGN_UP: {
      const state = store.getState();
      console.log(state.user);
      console.log('dep choisi', state.user.departement[0])

      axios.post('https://playrfindr.herokuapp.com/api/inscription', {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        email: state.user.email,
        password: state.user.password,
        passwordConfirm: state.user.passwordConfirm,
        birthdate: state.user.birthdate,
        departement_id: state.user.departement[0],
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
