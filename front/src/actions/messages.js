export const CHANGE_VALUE_MESSAGE = 'CHANGE_VALUE_MESSAGE';

export const changeValueMessage = (value, key) => ({
  type: CHANGE_VALUE_MESSAGE,
  value,
  key,
});
