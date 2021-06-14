export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_THEME = 'CHANGE_THEME';
export const FETCH_TYPES = 'FETCH_TYPES';
export const SAVE_TYPES = 'SAVE_TYPES';
export const FETCH_GAME = 'FETCH_GAME';
export const SAVE_GAME = 'SAVE_GAME';


export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  theme,
});

export const changeCat = (category) => ({
  type: CHANGE_CATEGORY,
  category,
});

export const fetchTypes = () => ({
  type: FETCH_TYPES,
});

export const saveTypes = (games, categories, themes) => ({
  type: SAVE_TYPES,
  games,
  categories,
  themes,
});

export const fetchGame = (id) => ({
  type: FETCH_GAME,
  id,
});

export const saveGame = (game) => ({
  type: SAVE_GAME,
  game,
});

