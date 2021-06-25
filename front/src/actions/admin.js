export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS';
export const FETCH_ALL_EDITORS = 'FETCH_ALL_EDITORS';
export const SAVE_ALL_EDITORS = 'SAVE_ALL_EDITORS';
export const FETCH_ALL_AUTHORS = 'FETCH_ALL_AUTHORS';
export const SAVE_ALL_AUTHORS = 'SAVE_ALL_AUTHORS';
export const DELETE_ONE_ENTRY = 'DELETE_ONE_ENTRY';
export const SAVE_NEW_ENTRY = 'SAVE_NEW_ENTRY';
export const SAVE_AFTER_DELETE = 'SAVE_AFTER_DELETE';
export const FETCH_ALL_TYPE = 'FETCH_ALL_TYPE';
export const SAVE_ALL_TYPE = 'SAVE_ALL_TYPE';
export const ADD_ELEMENTS_TYPE = 'ADD_ELEMENTS_TYPE';
export const SAVE_ELEMENTS_TYPE = 'SAVE_ELEMENTS_TYPE';
export const CHANGE_ADD_TYPE_FIELD = 'CHANGE_ADD_TYPE_FIELD';
export const EDIT_TYPE_FIELD = 'EDIT_TYPE_FIELD';
export const SAVE_EDIT_TYPE_FIELD = 'SAVE_EDIT_TYPE_FIELD';
export const CHANGE_AUTHOR_FIELD = 'CHANGE_AUTHOR_FIELD';
export const SAVE_ADD_AUTHOR = 'SAVE_ADD_AUTHOR';
export const SAVE_EDIT_AUTHOR = 'SAVE_EDIT_AUTHOR';
export const ADD_AUTHOR = 'ADD_AUTHOR';
export const EDIT_AUTHOR = 'EDIT_AUTHOR';
export const CHANGE_ADD_GAME_FIELD = 'CHANGE_ADD_GAME_FIELD';
export const CHANGE_ADD_GAME_FIELD_SELECT = 'CHANGE_ADD_GAME_FIELD_SELECT';
export const ADD_ELEMENT_GAME = 'ADD_ELEMENT_GAME';
export const SAVE_ELEMENT_GAME = 'SAVE_ELEMENT_GAME';

export const saveElementGame = (value) => ({
  type: SAVE_ELEMENT_GAME,
  value,
});

export const addElementGame = () => ({
  type: ADD_ELEMENT_GAME,
});

export const changeFieldGame = (value, key) => ({
  type: CHANGE_ADD_GAME_FIELD,
  value,
  key,
});

export const changeSelectGame = (value, key) => ({
  type: CHANGE_ADD_GAME_FIELD_SELECT,
  value,
  key,
});

export const addElementAuthor = (value, key) => ({
  type: ADD_AUTHOR,
  value,
  key,
});
export const saveAddAuthor = (value) => ({
  type: SAVE_ADD_AUTHOR,
  value,
});
export const editElementAuthor = (id) => ({
  type: EDIT_AUTHOR,
  id,
});

export const saveEditAuthor = (value, key, id) => ({
  type: SAVE_EDIT_AUTHOR,
  value,
  key,
  id,
});

export const changeFieldAuthor = (value, key) => ({
  type: CHANGE_AUTHOR_FIELD,
  value,
  key,
});

export const saveEditElementType = (value, key, id) => ({
  type: SAVE_EDIT_TYPE_FIELD,
  value,
  key,
  id,
});

export const editElementType = (value, key, id) => ({
  type: EDIT_TYPE_FIELD,
  value,
  key,
  id,
});

export const changeFieldType = (value, key) => ({
  type: CHANGE_ADD_TYPE_FIELD,
  value,
  key,
});

export const saveElementsType = (value, key) => ({
  type: SAVE_ELEMENTS_TYPE,
  value,
  key,
});
export const addElementType = (value, key) => ({
  type: ADD_ELEMENTS_TYPE,
  value,
  key,
});
export const saveAfterDelete = (value, key) => ({
  type: SAVE_AFTER_DELETE,
  value,
  key,
});

export const deleteElement = (value, key) => ({
  type: DELETE_ONE_ENTRY,
  value,
  key,
});

export const saveElement = (value, key) => ({
  type: SAVE_NEW_ENTRY,
  value,
  key,
});

export const fetchAllType = () => ({
  type: FETCH_ALL_TYPE,
});

export const saveAllType = (games, categories, themes, events) => ({
  type: SAVE_ALL_TYPE,
  games,
  categories,
  themes,
  events,
});

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
