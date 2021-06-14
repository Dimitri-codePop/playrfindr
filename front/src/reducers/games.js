import gamesData from 'src/data/game';
const game = gamesData.game;
import { getSpec, addOrRemove } from 'src/selectors/find';

import {
  CHANGE_THEME,
  CHANGE_CATEGORY,
  SAVE_TYPES,
  SAVE_GAME,
} from 'src/actions/games';

const initialState = {
  categories: [],
  themes: [],
  themeSearch: [],
  catSearch: [],
  gamesInit: [],
  goodGames: [],
  checked: '',
  loading: true,
  oneGame: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    case CHANGE_THEME:
      const newThemes = addOrRemove(state.themeSearch, action.theme);
      console.log(`newThemes`, newThemes);
      return {
        ...state,
        themeSearch: newThemes,
        goodGames: getSpec(state.themeSearch, state.catSearch, state.gamesInit),
      };
      case CHANGE_CATEGORY:
        const newCat = addOrRemove(state.catSearch, action.category);
        return {
          ...state,
          catSearch: newCat,
          goodGames: getSpec(state.themeSearch, state.catSearch, state.gamesInit),
        };
      case SAVE_TYPES:
        return {
          ...state,
          gamesInit: [...action.games],
          goodGames: [...action.games],
          categories: [...action.categories],
          themes: [...action.themes],
          loading: false,
        };
      case SAVE_GAME:
        return {
          ...state,
          oneGame: action.game,
          loading: false,
        };
    default:
      return state;
  }
};

export default reducer;
