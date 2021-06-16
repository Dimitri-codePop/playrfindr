import { FETCH_TYPES, saveTypes } from 'src/actions/games';
import { FETCH_DEPARTEMENTS, saveDepartements } from 'src/actions/user'
import axios from 'axios';

const types = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TYPES: {
      let categories = 'https://playrfindr.herokuapp.com/api/categories'
      let themes = 'https://playrfindr.herokuapp.com/api/themes'
      let games = 'https://playrfindr.herokuapp.com/api/jeux'
      const requestCategories = axios.get(categories);
      const requestThemes = axios.get(themes);
      const requestGames = axios.get(games);


      axios.all([requestCategories, requestThemes, requestGames]).then(axios.spread((...responses) => {
        const responseCategories = responses[0].data.data
        const responseThemes = responses[1].data.data
        const responseGames = responses[2].data.data

        const allTypes = saveTypes(responseGames, responseCategories, responseThemes);
        store.dispatch(allTypes);
        /*headers: {
            'authorization': state.user.token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then((response) => {
          saveCategories = response.data.data;
        })
        */
      })).catch(errors => {
        console.log(errors)
      })

      /*axios.get('https://playrfindr.herokuapp.com/api/themes')
        .then((response) => {
          saveThemes = response.data.data;
        })       
        .catch((error) => console.log(`error`, error));
      
      axios.get('https://playrfindr.herokuapp.com/api/jeux')
        .then((response) => {
          const saveType = saveTypes(response.data.data, saveCategories, saveThemes);
          store.dispatch(saveType);
        })
        .catch((error) => console.log(`error`, error));
      */
      break;
    }
    case FETCH_DEPARTEMENTS: {
      axios.get('https://playrfindr.herokuapp.com/api/departements')
      .then((response) => {
        console.log(response.data.data);
        const saveDepartement = saveDepartements(response.data.data);
        store.dispatch(saveDepartement);
      })
      .catch((error) => console.log(`error`, error));
      break;
    }
    default:
      next(action);
  }
};

export default types;
