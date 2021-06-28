import axios from 'axios';
import { fetchUser } from 'src/actions/user';

const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
  const token = JSON.parse(localStorage.getItem('tokenLimits'));
  if (token < Date.now() / 1000) {
    console.log('tokent', token);
    store.dispatch(fetchUser());
  }
  // if (jwtDecode(token).exp < Date.now() / 1000) {
  //   next(action);
  //   localStorage.clear();
  // }
  next(action);
};

export default checkTokenExpirationMiddleware;
