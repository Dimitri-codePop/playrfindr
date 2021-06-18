import { FETCH_PROFIL, showProfil, EDIT_USER, saveEditUser } from 'src/actions/user';
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
        .catch((error) => console.log('error', error));

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
      console.log(state.user.profil, goodCat, goodTheme, state.user.profil.department);
      axios.patch(`https://playrfindr.herokuapp.com/api/profil/${state.user.profil.id}`, {
        firstname: state.user.profil.firstname,
        lastname: state.user.profil.lastname,
        email: state.user.profil.email,
        department_id: state.user.profil.department,
        category_id: goodCat,
        theme_id: goodTheme,
        password: state.user.password,
        passwordConfirm: state.user.passwordConfirm,
        oldPassword: state.user.oldPassword,
      }, {
        headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          const actionSaveEditUser = saveEditUser(response.data);
          localStorage.clear();
          state.user.profil.token = state.user.token;
          localStorage.setItem('UserKeysUsed', JSON.stringify(state.user.profil));
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
