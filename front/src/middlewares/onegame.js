import { FETCH_GAME, saveGame } from 'src/actions/games';
import axios from 'axios';

const onegame = (store) => (next) => (action) => {

  const state = store.getState();

  
  switch (action.type) {
    case FETCH_GAME: {
      axios.get(`https://playrfindr.herokuapp.com/api/jeu/${action.id}`, { headers: {
        "Authorization": `${state.user.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }})
        .then((response) => {
          console.log(`game`, response.data.data)
          
          const theGame = saveGame(response.data.data);
          store.dispatch(theGame);
        })
  
        .catch((error) => console.log(`error`, error));
  
      break;
    }
    default:
      next(action);
  }
};
  
export default onegame;
