export const CHANGE_VALUE_MESSAGE = 'CHANGE_VALUE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const SAVE_DEL_MSG = 'SAVE_DEL_MSG';



export const changeValueMessage = (value, key) => ({
  type: CHANGE_VALUE_MESSAGE,
  value,
  key,
});

export const sendMessage = (message, id) => ({
  type: SEND_MESSAGE,
  message,
  id,
});

export const fetchMessages = () => ({
  type: FETCH_MESSAGES,
});

export const saveMessages = (value) => ({
  type: SAVE_MESSAGES,
  value,
});

export const deleteMessage = (id) => ({
  type: DELETE_MESSAGE,
  id,
});

export const saveDelMsg = () => ({
  type: SAVE_DEL_MSG,
});



