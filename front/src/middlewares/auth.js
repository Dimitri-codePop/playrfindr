import { LOGIN, saveUser, SIGN_UP } from 'src/actions/user';
import axios from 'axios';

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      console.log(state);
      axios.post('http://localhost:3001/login', {
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
      axios.post('http://localhost:3001/signup', {
        email: state.user.email,
        password: state.user.password,
        passwordConfirm: state.user.passwordConfirm,
        departement: state.user.departement,
      })
        .then((response) => {
          console.log(response.data);
          const { data } = response;
          const saveUserAction = saveUser(data);
          store.dispatch(saveUserAction);
        })
        .catch((error) => console.log('error',error));
        const saveUserAction = saveUser(data);
        store.dispatch(saveUserAction);
      break;
    }
    default:
      next(action);
  }
};

export default login;
