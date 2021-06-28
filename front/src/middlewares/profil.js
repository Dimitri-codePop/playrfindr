import {
  FETCH_PROFIL,
  showProfil,
  EDIT_USER,
  saveEditUser,
  EDIT_PASSWORD,
} from 'src/actions/user';
import {
  ADD_GAME_TO_LIB,
  DELETE_GAME_FROM_LIB,
  saveCurrentLibAfterDelete,
} from 'src/actions/games';
import {
  messageEditPassword,
  messageAddGameToLib,
  messageDeleteGameFromLib,
} from 'src/actions/systemMessages';
import axios from 'axios';
import { FindGoodGameByName } from 'src/selectors/find';

const profil = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFIL: {
      const state = store.getState();
      axios.get(`https://playrfindr.herokuapp.com/api/profil/${action.id}`, {
          headers: {
            "Authorization": `${state.user.token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
        })
        .then((response) => {
          const actionShowProfil = showProfil(response.data);
          store.dispatch(actionShowProfil);
        })
        .catch((error) => {
          console.log('error', error);
        });

      break;
    }
    case EDIT_USER: {
      const state = store.getState();
      const goodCat = [];
      const goodTheme = [];
      state.user.profil.category.map((cat) => {
        const found = FindGoodGameByName(state.games.categories, cat);
        goodCat.push(found.id);
      });
      state.user.profil.theme.map((obj) => {
        const found = FindGoodGameByName(state.games.themes, obj);
        goodTheme.push(found.id);
      });
      axios.patch(`https://playrfindr.herokuapp.com/api/profil/${state.user.profil.id}`, {
        firstname: state.user.profil.firstname,
        lastname: state.user.profil.lastname,
        email: state.user.profil.email,
        department_id: state.user.profil.department,
        birthdate: state.user.profil.birthdate,
        category_id: goodCat,
        theme_id: goodTheme,
      }, {
        headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          state.user.profil.token = state.user.token;
          const actionSaveEditUser = saveEditUser(response.data);
          localStorage.setItem('UserKeysUsed', JSON.stringify(state.user.profil));
          store.dispatch(actionSaveEditUser);
          const message = 'Votre profil a bien été édité';
          const isOk = true;
          const actionEditPassword = messageEditPassword(message, isOk);
          store.dispatch(actionEditPassword);
        })
        .catch((error) => {
          console.log('error', error);
          const message = "Votre Profil n'a pas pu être édité";
          const isOk = false;
          const actionEditPassword = messageEditPassword(message, isOk);
          store.dispatch(actionEditPassword);
        });
      break;
    }
    case EDIT_PASSWORD: {
      const state = store.getState();
      axios.patch(`https://playrfindr.herokuapp.com/api/profil/${state.user.profil.id}`, {
        password: state.user.password,
        passwordConfirm: state.user.passwordConfirm,
        //oldPassword: state.user.oldPassword,
      }, {
        headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((res) => {
          const message = 'Votre mot de passe a bien été édité';
          const isOk = true;
          const actionEditPassword = messageEditPassword(message, isOk);
          store.dispatch(actionEditPassword);
        })
        .catch((error) => {
          console.log('errot', error);
          const message = "Une erreur s'est produite, veuillez réessayer plus tard !";
          const isOk = false;
          const actionEditPassword = messageEditPassword(message, isOk);
          store.dispatch(actionEditPassword);
        });
      break;
    }
    case ADD_GAME_TO_LIB:{
      const state = store.getState();
      const user = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.post(`https://playrfindr.herokuapp.com/api/profil/${user.id}/collection/${action.gameId}`,{}, {
        headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
      .then((res) => {
        let message='';
        let isOk = false;
        if(res.data.message){
          message = 'Le jeu a bien été ajouté à votre Ludothèque';
          isOk = true;
        } else {
          message = "Le jeux est déjà présent dans votre Ludothèque";
        }
        const actionMessAddGameToLib = messageAddGameToLib(message, isOk);
        store.dispatch(actionMessAddGameToLib);
      })
      .catch((error) => {
        const message = "Une erreur s'est produite, veuillez réessayer dans quelques instants.";
        const isOk = false;
        const actionMessAddGameToLib = messageAddGameToLib(message, isOk);
        store.dispatch(actionMessAddGameToLib);
      });
      break;
    }
    case DELETE_GAME_FROM_LIB:
      const state = store.getState();
      const user = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.delete(`https://playrfindr.herokuapp.com/api/profil/${user.id}/collection/${action.gameId}`, {
        headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
      .then((res) => {
        const message= 'Le jeux à bien été supprimé de votre ludothèque';
        let isOk = true;
        const actionStateDeleteGame = saveCurrentLibAfterDelete(action.name);
        const actionMessDeleteGameToLib = messageDeleteGameFromLib(message, isOk);
        store.dispatch(actionMessDeleteGameToLib);
        store.dispatch(actionStateDeleteGame);
      })
      .catch((error) => {
        const message = "Une erreur s'est produite, veuillez réessayer dans quelques instants.";
        const isOk = false;
        const actionMessDeleteGameToLib = messageDeleteGameFromLib(message, isOk);
        store.dispatch(actionMessDeleteGameToLib);
      });
    default:
      next(action);
  }
};

export default profil;
