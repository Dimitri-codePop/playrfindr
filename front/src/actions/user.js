export const SAVE_USER = 'SAVE_USER';
export const LOGIN = 'LOGIN';
export const CHANGE_VALUE_LOGIN = 'CHANGE_VALUE_LOGIN';
export const CHANGE_VALUE_SIGNUP = 'CHANGE_VALUE_SIGNUP';
export const SIGN_UP = 'SIGN_UP';
export const FETCH_USER = 'FETCH_USER';
export const LOGOUT = 'LOGOUT';
export const KILL_CURRENT_USER = 'KILL_CURRENT_USER';
export const FETCH_PROFIL = 'FETCH_PROFIL';
export const SHOW_PROFIL = 'SHOW_PROFIL';

export const showProfil = (value) => ({
  type: SHOW_PROFIL,
  value,
});

export const fetchProfil = (id) => ({
  type: FETCH_PROFIL,
  id,
});
export const killCurrentUser = () => ({
  type: KILL_CURRENT_USER,
});

export const logout = () => ({
  type: LOGOUT,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const saveUser = (
  id,
  token,
  email,
  department_number,
  department_label,
  isLogged,
  firstname,
  lastname,
  birthdate,
) => ({
  type: SAVE_USER,
  id,
  token,
  department_number,
  department_label,
  isLogged,
  firstname,
  lastname,
  email,
  birthdate,
});

export const login = () => ({
  type: LOGIN,
});

export const changeValueLogin = (value, key) => ({
  type: CHANGE_VALUE_LOGIN,
  value,
  key,
});

export const changeValueSignup = (value, key) => ({
  type: CHANGE_VALUE_SIGNUP,
  value,
  key,
});

export const signUp = () => ({
  type: SIGN_UP,
});

export const CHANGE_VALUE_SIGNUP_SELECT = 'CHANGE_VALUE_SIGNUP_SELECT';
export const changeSelectField = (value, key) => ({
  type: CHANGE_VALUE_SIGNUP_SELECT,
  value,
  key,
});

export const FETCH_DEPARTEMENTS = 'FETCH_DEPARTEMENTS';
export const fetchDepartements = () => ({
  type: FETCH_DEPARTEMENTS,
});

export const SAVE_DEPARTEMENTS = 'SAVE_DEPARTEMENTS';
export const saveDepartements = (value) => ({
  type: SAVE_DEPARTEMENTS,
  value,
});
