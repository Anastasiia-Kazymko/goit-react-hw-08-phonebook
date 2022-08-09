import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contactsSlice';
import { filter } from './filterSlise';

export const store = configureStore({
  reducer: {
    contacts: contacts.reducer,
    filter: filter.reducer,
  },
});
