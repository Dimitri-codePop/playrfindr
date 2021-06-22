export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS';
export const FETCH_ALL_EDITORS = 'FETCH_ALL_EDITORS';
export const SAVE_ALL_EDITORS = 'SAVE_ALL_EDITORS';
export const FETCH_ALL_AUTHORS = 'FETCH_ALL_AUTHORS';
export const SAVE_ALL_AUTHORS = 'SAVE_ALL_AUTHORS';

export const fetchAuthors = () => ({
  type: FETCH_ALL_AUTHORS,
});

export const fetchEditors = () => ({
  type: FETCH_ALL_EDITORS,
});

export const saveEditors = (value) => ({
  type: SAVE_ALL_EDITORS,
  value,
});

export const saveAuthors = (value) => ({
  type: SAVE_ALL_AUTHORS,
  value,
});

export const fetchUsers = () => ({
  type: FETCH_ALL_USERS,
});

export const saveUsers = (value) => ({
  type: SAVE_ALL_USERS,
  value,
});
