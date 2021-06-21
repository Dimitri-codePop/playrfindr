
import {
  CHANGE_SEARCH_VALUE,
  SAVE_SEARCH,
} from 'src/actions/search';

const initialState = {
  search:'',
  resultsUsers:[],
  resultsGames:[],
  resultsSearch:'',
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        search: [action.value],
      };
    case SAVE_SEARCH:
      return {
        ...state,
        resultsUsers: [action.users],
        resultsGames: [action.games],
        resultsSearch: state.search,
        search: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
