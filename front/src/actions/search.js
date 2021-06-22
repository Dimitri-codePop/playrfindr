export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const NAV_SEARCH = 'NAV_SEARCH';
export const SAVE_SEARCH = 'SAVE_SEARCH';

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
});


export const navSearch = (value) => ({
  type: NAV_SEARCH,
  value,
});


export const saveSearch = (users, games) => ({
  type: SAVE_SEARCH,
  users,
  games,
});
