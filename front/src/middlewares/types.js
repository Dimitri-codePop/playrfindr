import { FETCH_TYPES, saveTypes } from 'src/actions/games';
import { FETCH_DEPARTEMENTS, saveDepartements } from 'src/actions/user'
import axios from 'axios';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TYPES: {
      let saveCategories;
      axios.get('https://playrfindr.herokuapp.com/api/categories')
        .then((response) => {
          saveCategories = response.data.data;
        })

        .catch((error) => console.log(`error`, error));

      
      axios.get('https://playrfindr.herokuapp.com/api/themes')
        .then((response) => {
          const saveType = saveTypes(response.data.data, saveCategories);
          store.dispatch(saveType);
        })
        
        .catch((error) => console.log(`error`, error));

      break;
    }
    case FETCH_DEPARTEMENTS: {
      axios.get('https://playrfindr.herokuapp.com/api/departements')
      .then((response) => {
        console.log(response.data.data);
        const saveDepartement = saveDepartements(response.data.data);
        store.dispatch(saveDepartement);
      })
    }
    default:
      next(action);
  }
};

export default categories;
