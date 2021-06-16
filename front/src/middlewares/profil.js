import { FETCH_PROFIL, showProfil } from 'src/actions/user';
import axios from 'axios';

const profil = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFIL:
      const state = store.getState();
      axios.get(`https://playrfindr.herokuapp.com/api/profil/${action.id}`,
        {
          headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          console.log(response.data);
          const actionShowProfil = showProfil(response.data);
          store.dispatch(actionShowProfil);
        })
        .catch((error) => console.log('error', error));

      break;
    default:
      next(action);
  }
};

export default profil;
