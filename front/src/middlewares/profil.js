import { FETCH_PROFIL, showProfil, EDIT_USER, saveEditUser } from 'src/actions/user';
import axios from 'axios';

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
        .catch((error) => console.log('error', error));

      break;
    }
    case EDIT_USER: {
      const state = store.getState();
      console.log(state.user.profil);
      axios.patch(`https://playrfindr.herokuapp.com/api/profil/${state.user.profil.id}`, {
        ...state.user.profil,
      }, {
        headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        const actionSaveEditUser = saveEditUser(response.data);
        store.dispatch(actionSaveEditUser);
      })
      .catch((error) => console.log('errot', error));
      break;
    }
    default:
      next(action);
  }
};

export default profil;
