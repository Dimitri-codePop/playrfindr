export const SHOW_EDIT_PASSWORD_MESSAGE = 'SHOW_EDIT_PASSWORD_MESSAGE';
export const SHOW_LOGIN_MESSAGE = 'SHOW_LOGIN_MESSAGE';
export const SHOW_LOGOUT_MESSAGE = 'SHOW_LOGOUT_MESSAGE';
export const SHOW_ADD_GAME_TO_LIB_MESSAGE = 'SHOW_ADD_GAME_TO_LIB_MESSAGE';
export const SHOW_DELETE_GAME_FROM_LIB_MESSAGE = 'SHOW_DELETE_GAME_FROM_LIB_MESSAGE';

export const messageLogOut = (value, key) => ({
  type: SHOW_LOGOUT_MESSAGE,
  value,
  key,
});
export const messageLogin = (value, key) => ({
  type: SHOW_LOGIN_MESSAGE,
  value,
  key,
});
export const messageEditPassword = (value, key) => ({
  type: SHOW_EDIT_PASSWORD_MESSAGE,
  value,
  key,
});

export const messageAddGameToLib = (value, key) => ({
  type: SHOW_ADD_GAME_TO_LIB_MESSAGE,
  value,
  key,
});

export const messageDeleteGameFromLib = (value, key) => ({
  type: SHOW_DELETE_GAME_FROM_LIB_MESSAGE,
  value,
  key
});
