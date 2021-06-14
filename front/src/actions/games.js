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
