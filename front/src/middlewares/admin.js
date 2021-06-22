import {
  FETCH_ALL_USERS,
  saveUsers,
  FETCH_ALL_AUTHORS,
  FETCH_ALL_EDITORS,
  saveAuthors,
  saveEditors,
} from 'src/actions/admin';

import axios from 'axios';

const admin = (store) => (next) => (action) => {
  const { token } = JSON.parse(localStorage.getItem('UserKeysUsed'));
  switch (action.type) {
    case FETCH_ALL_USERS: {
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

    default:
      next(action);
  }
};

export default admin;
