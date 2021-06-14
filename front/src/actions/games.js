export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_THEME = 'CHANGE_THEME';

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
