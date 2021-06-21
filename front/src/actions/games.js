export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_THEME = 'CHANGE_THEME';
export const FETCH_TYPES = 'FETCH_TYPES';
export const SAVE_TYPES = 'SAVE_TYPES';
export const FETCH_GAME = 'FETCH_GAME';
export const SAVE_GAME = 'SAVE_GAME';
export const ADD_GAME_TO_LIB = 'ADD_GAME_TO_LIB'; 
export const SAVE_GAME_TO_LIB = 'SAVE_GAME_TO_LIB';
export const DELETE_GAME_FROM_LIB = 'DELETE_GAME_FROM_LIB';
export const SAVE_CURRENT_LIB_AFTER_DELETE = 'SAVE_CURRENT_LIB_AFTER_DELETE';

export const addGameToLib = (gameId) => ({
  type: ADD_GAME_TO_LIB,
  gameId,
});

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  theme,
});

export const changeCat = (category) => ({
  type: CHANGE_CATEGORY,
  category,
});

export const SAVE_TOP_GAMES = 'SAVE_TOP_GAMES'
export const saveTopTendances = (value) => ({
  type: SAVE_TOP_GAMES,
  topTendances: value,
})

export const FETCH_TOP_GAMES = 'FETCH_TOP_GAMES' 
export const fetchTopTendances = () => ({
  type: FETCH_TOP_GAMES,
})

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

export const deleteGameFromLib = (gameId, name) => ({
  type: DELETE_GAME_FROM_LIB,
  gameId,
  name,
});

export const saveCurrentLibAfterDelete = (gameName) => ({
  type: SAVE_CURRENT_LIB_AFTER_DELETE,
  gameName,
})
