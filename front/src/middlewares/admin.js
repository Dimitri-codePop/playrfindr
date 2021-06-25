import {
  FETCH_ALL_USERS,
  FETCH_ALL_AUTHORS,
  FETCH_ALL_EDITORS,
  FETCH_ALL_TYPE,
  ADD_ELEMENTS_TYPE,
  EDIT_TYPE_FIELD,
  saveEditElementType,
  saveElementsType,
  saveUsers,
  saveAuthors,
  saveEditors,
  saveAllType,
  DELETE_ONE_ENTRY,
  saveAfterDelete,
  ADD_AUTHOR,
  saveAddAuthor,
  EDIT_AUTHOR,
  saveEditAuthor,
  ADD_ELEMENT_GAME,
  saveElementGame,
} from 'src/actions/admin';
import axios from 'axios';

const admin = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_TYPE: {
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      let categories = 'https://playrfindr.herokuapp.com/admin/category';
      let themes = 'https://playrfindr.herokuapp.com/admin/theme';
      let games = 'https://playrfindr.herokuapp.com/admin/jeux';
      let events = 'https://playrfindr.herokuapp.com/admin/event';
      const requestCategories = axios.get(categories, { headers: {
        "Authorization": `${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }});
      const requestThemes = axios.get(themes, { headers: {
        "Authorization": `${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }});
      const requestEvents = axios.get(events,{ headers: {
        "Authorization": `${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }});
      const requestGames = axios.get(games, { headers: {
        "Authorization": `${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }});

      axios.all([requestCategories,
        requestThemes,
        requestGames, requestEvents])
        .then(axios.spread((...responses) => {
          const responseCategories = responses[0].data.data;
          const responseThemes = responses[1].data.data;
          const responseGames = responses[2].data.data;
          const responseEvents = responses[3].data.data;
          const allTypes = saveAllType(responseGames,
            responseCategories,
            responseThemes,
            responseEvents);
          store.dispatch(allTypes);
        })).catch(errors => {
          console.log(errors);
        });
      break;
    }
    case FETCH_ALL_USERS: {
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.get('https://playrfindr.herokuapp.com/admin/users', {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          const users = saveUsers(response.data.data);
          store.dispatch(users);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    case FETCH_ALL_AUTHORS: {
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.get('https://playrfindr.herokuapp.com/admin/author', {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          const authors = saveAuthors(response.data.data);
          store.dispatch(authors);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    case FETCH_ALL_EDITORS: {
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.get('https://playrfindr.herokuapp.com/admin/editor', {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          const editors = saveEditors(response.data.data);
          store.dispatch(editors);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    case DELETE_ONE_ENTRY: {
      console.log('MDW ', action.key, action.value);
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.delete(`https://playrfindr.herokuapp.com/admin/${action.key}/${action.value}`, {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          console.log(response.data);
          const data = saveAfterDelete(action.value, action.key);
          store.dispatch(data);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    case ADD_ELEMENTS_TYPE: {
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      console.log('MDW ', action.key, action.value);
      axios.post(`https://playrfindr.herokuapp.com/admin/${action.key}`, {
        label: action.value,
      }, {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          console.log(response.data.data);
          const data = saveElementsType(response.data.data, action.key);
          store.dispatch(data);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    case EDIT_TYPE_FIELD: {
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      console.log('MDW ', action.key, action.value, action.id);
      axios.patch(`https://playrfindr.herokuapp.com/admin/${action.key}/${action.id}`,{
        label: action.value,
      }, {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          console.log(response.data);
          const data = saveEditElementType(response.data.data, action.key);
          store.dispatch(data);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    case ADD_AUTHOR: {
      const state = store.getState();
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      console.log('MDW ', action.key, action.value);
      axios.post(`https://playrfindr.herokuapp.com/admin/author`, {
        ...state.admin.new.author,
      }, {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          console.log(response.data.author.dataValues);
          const data = saveAddAuthor(response.data.author.dataValues);
          store.dispatch(data);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    case EDIT_AUTHOR: {
      const state = store.getState();
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.patch(`https://playrfindr.herokuapp.com/admin/author/${action.id}`, {
        ...state.admin.new.author,
      }, {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          console.log(response.data.data);
          const data = saveEditAuthor(response.data.data, action.key);
          store.dispatch(data);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    case ADD_ELEMENT_GAME: {
      const state = store.getState();
      console.log(state.admin.new.jeu);
      let describe;
      if (state.admin.new.jeu.describe) {
        describe = state.admin.new.jeu.describe;
      }
      else {
        describe = 'La description de ce jeux arrivera prochainement.';
      }
      const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
      axios.post(`https://playrfindr.herokuapp.com/admin/jeux`, {
        label: state.admin.new.jeu.label,
        duration: Number(state.admin.new.jeu.duration),
        player_min: Number(state.admin.new.jeu.player_min),
        player_max: Number(state.admin.new.jeu.player_max),
        age_min: Number(state.admin.new.jeu.age_min),
        year: Number(state.admin.new.jeu.year),
        describe: describe,
        editor_id: state.admin.new.jeu.editor,
        theme_id: state.admin.new.jeu.theme,
        author_id: state.admin.new.jeu.author,
        category_id: state.admin.new.jeu.category,
        picture: 'https://www.clipartmax.com/png/middle/159-1598074_board-game-free-icon-game.png',
      }, {
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          const data = saveElementGame(response.data.data);
          store.dispatch(data);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    default:
      next(action);
  }
};

export default admin;
