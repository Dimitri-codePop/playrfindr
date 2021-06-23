import { NAV_SEARCH, saveSearch } from 'src/actions/search';
import axios from 'axios';

const search = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case NAV_SEARCH: {
      let searchUser = `https://playrfindr.herokuapp.com/api/search/user/${action.value}`
      let searchGame = `https://playrfindr.herokuapp.com/api/search/game/${action.value}`
      const requestUsers = axios.get(searchUser,
        { headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        }});
        
      const requestGames = axios.get(searchGame,
        { headers: {
          "Authorization": `${state.user.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        }});

      axios.all([requestUsers, requestGames]).then(axios.spread((...responses) => {
        const responseUsers = responses[0].data.data
        const responseGames = responses[1].data.data
        console.log(`responsesU`, responseUsers)
        console.log(`responsesG`, responseGames)

        const allSearch = saveSearch(responseUsers, responseGames);
        store.dispatch(allSearch);

      })).catch(errors => {
        console.log(errors)
      })
      break;
    }
    default:
      next(action);
  }
};

export default search;
