export const SAVE_EVENTS = 'SAVE_EVENTS';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const CHANGE_VALUE_EVENT = 'CHANGE_VALUE_EVENT';
export const NEW_EVENT = 'NEW_EVENT';
export const SAVE_NEW_EVENT = 'SAVE_NEW_EVENT';
export const ADD_TO_EVENT = 'ADD_TO_EVENT';
export const SAVE_ADD_TO_EVENT = 'SAVE_ADD_TO_EVENT';
export const REMOVE_FROM_EVENT = 'REMOVE_FROM_EVENT';
export const SAVE_REMOVE_FROM_EVENT = 'SAVE_REMOVE_FROM_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const SAVE_EDIT_EVENT = 'SAVE_EDIT_EVENT';
export const EDIT_VALUE_EVENT = 'EDIT_VALUE_EVENT';
export const SET_EVENT = 'SET_EVENT';
export const SAVE_REMOVE_EVENT = 'SAVE_REMOVE_EVENT';
export const REINI_EVENT = 'REINI_EVENT';



export const saveEvents = (events) => ({
  type: SAVE_EVENTS,
  events,
});

export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

export const changeValueEvent = (value, key) => ({
  type: CHANGE_VALUE_EVENT,
  value,
  key,
});

export const newEvent = () => ({
  type: NEW_EVENT,
});

export const saveNewEvent = () => ({
  type: SAVE_NEW_EVENT,
});

export const addToEvent = (value) => ({
  type: ADD_TO_EVENT,
  value,
});

export const saveAddToEvent = (event) => ({
  type: SAVE_ADD_TO_EVENT,
  event,
});


export const removeFromEvent = (id) => ({
  type: REMOVE_FROM_EVENT,
  id,
});

export const saveRemoveFromEvent = (event) => ({
  type: SAVE_REMOVE_FROM_EVENT,
  event,
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  id,
});

export const editEvent = (id) => ({
  type: EDIT_EVENT,
  id,
});

export const saveEditEvent = () => ({
  type: SAVE_EDIT_EVENT,
});

export const EditValueEvent = (value, key) => ({
  type: EDIT_VALUE_EVENT,
  value,
  key,
});

export const setEvent = (event) => ({
  type: SET_EVENT,
  event,
});

export const saveRemoveEvent = () => ({
  type: SAVE_REMOVE_EVENT,
});

export const reiniEvent = () => ({
  type: REINI_EVENT,
});




