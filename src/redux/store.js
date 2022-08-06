import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('itemsReducer/addContact');
export const deleteContact = createAction('itemsReducer/deleteContact');

console.log(addContact(100), deleteContact(100));

const itemsReducer = createReducer(100, {
  [addContact]: (state, action) => state + action.payload,
  [deleteContact]: (state, action) => state - action.payload,
});

const filterReducer = createReducer(200, {
  changeFilter: (state, action) => (state.filter = action.payload),
});

export const store = configureStore({
  reducer: {
    contacts: {
      items: itemsReducer,
      filter: filterReducer,
    },
  },
});
