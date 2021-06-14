export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_THEME = 'CHANGE_THEME';
export const FETCH_TYPES = 'FETCH_TYPES';
export const SAVE_TYPES = 'SAVE_TYPES';


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

export const saveTypes = (themes, categories) => ({
  type: SAVE_TYPES,
  themes,
  categories,
});

