import {
  FETCH_ALL_USERS,
  FETCH_ALL_AUTHORS,
  FETCH_ALL_EDITORS,
  FETCH_ALL_TYPE,
  ADD_ELEMENTS_TYPE,
  saveElementsType,
  saveUsers,
  saveAuthors,
  saveEditors,
  saveAllType,
} from 'src/actions/admin';

import axios from 'axios';
import { DELETE_ONE_ENTRY, saveAfterDelete } from '../actions/admin';

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
          console.log(`author`, response.data);
          const authors = saveAuthors(response.data.authors);
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
          console.log(response.data.theme.dataValues);
          const data = saveElementsType(response.data.theme.dataValues, action.key);
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
