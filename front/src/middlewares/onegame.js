import { FETCH_GAME, saveGame } from 'src/actions/games';
import axios from 'axios';

const onegame = (store) => (next) => (action) => {

  
  switch (action.type) {
    case FETCH_GAME: {
      axios.get(`https://playrfindr.herokuapp.com/api/jeu/${action.id}`)
        .then((response) => {
          
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
