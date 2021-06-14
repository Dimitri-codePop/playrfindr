import { FETCH_TOP_GAMES, saveTopTendances} from 'src/actions/games';
import axios from 'axios';


const games = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TOP_GAMES: {
      axios.get('https://playrfindr.herokuapp.com/api')
        .then((res) => {
          console.log('responses :', res.data.data);
          const actionFetchRecipes = saveTopTendances(res.data.data);
          store.dispatch(actionFetchRecipes);
        })
        .catch((error) => console.log('error :', error));

        break;
    }
    default:
      next(action);
  }
};

export default games;
