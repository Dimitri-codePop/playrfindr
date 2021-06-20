import {
  FETCH_ALL_USERS,
  saveUsers,
} from 'src/actions/admin';

import axios from 'axios'; 

const admin = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_USERS: {
      const state = store.getState();
      axios.get('https://playrfindr.herokuapp.com/admin/users', {
        headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(`users`, response.data.data)
        
        const users = saveUsers(response.data.data);
        store.dispatch(users);
      })
      .catch((error) => console.log(`error`, error));
      break;  
    }
    default:
      next(action);
  }
};

export default admin;
