import {
  LOGIN,
  LOGOUT,
  saveUser,
  SIGN_UP,
  FETCH_USER,
  killCurrentUser,
} from 'src/actions/user';
import {
  messageLogin,
  messageLogOut,
} from 'src/actions/systemMessages';
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
            department_label,
          } = response.data;
          const { isLogged } = response.data;
          const dataUser = response.data;
          dataUser.remindMe = action.remindMe;
          const tokenexpiration = new Date();
          tokenexpiration.setSeconds(new Date().getSeconds() + 3600);
          console.log(tokenexpiration);
          console.log(dataUser);
          localStorage.setItem('tokenLimits', JSON.stringify(tokenexpiration));
          localStorage.setItem('UserKeysUsed', JSON.stringify(dataUser));
          const saveUserAction = saveUser(id, token, email, department_number, department_label, isLogged, firstname, lastname, birthdate);
          store.dispatch(saveUserAction);
          const message = 'Vous êtes bien connectés';
          const isOk = true;
          const actionLoginMessage = messageLogin(message, isOk);
          store.dispatch(actionLoginMessage);
        })
        .catch((error) => {
          console.log(`error`, error);
          const message = 'Votre Identifiant ou Mot de passe est incorrect';
          const isOk = false;
          const actionLoginMessage = messageLogin(message, isOk);
          store.dispatch(actionLoginMessage);
        });
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
        picture: 'https://t3.ftcdn.net/jpg/00/85/06/44/360_F_85064489_TfbAnASPyjxyaUCZL0dQEeStLHZqKKle.jpg',
      })
        .then((response) => {
          console.log(response);
          const { data } = response;
          const saveUserAction = saveUser(data);
          store.dispatch(saveUserAction);
        })
        .catch((error) => console.log(error));
      break;
    }
    case FETCH_USER: {
      console.log(localStorage);
      let fetchUser = localStorage.getItem('UserKeysUsed');
      fetchUser = JSON.parse(fetchUser);
      if (fetchUser) {
        const {
          firstname,
          lastname,
          email,
          id,
          birthdate,
          token,
          department_number,
          department_label,
          isLogged,
        } = fetchUser;
        if (fetchUser.remindMe) {
          store.dispatch(saveUser(
            Number(id),
            token,
            email,
            Number(department_number),
            department_label,
            isLogged,
            firstname,
            lastname,
            birthdate,
          ));
        }
        else {
          localStorage.clear();
        }
      }
      break;
    }
    case LOGOUT: {
      localStorage.clear();
      store.dispatch(killCurrentUser());
      const message = 'Déconnexion réussie';
      const isOk = true;
      const actionLogOutMessage = messageLogOut(message, isOk);
      store.dispatch(actionLogOutMessage);
      break;
    }
    default:
      next(action);
  }
};

export default login;
