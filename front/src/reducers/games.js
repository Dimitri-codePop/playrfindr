import gamesData from 'src/data/game';
const game = gamesData.game;
import { getSpec, addOrRemove } from 'src/selectors/find';

import {
  CHANGE_THEME,
  CHANGE_CATEGORY,
} from 'src/actions/games';

const initialState = {
  themeSearch: [],
  catSearch: [],
  gamesInit: game,
  goodGames: game,
  checked: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    case CHANGE_THEME:
      const newThemes = addOrRemove(state.themeSearch, action.theme);
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
    default:
      return state;
  }
};

export default reducer;
