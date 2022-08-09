import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const addedСontank = state.find(
          contact => contact.name === action.payload.name
        );

        if (addedСontank) {
          alert(`${action.payload.name} is already in contacts!`);
          return;
        }

        state.items.push(action.payload);
      },
      prepare: (name, number) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },
    deleteContact(state, action) {
      return state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(persistConfig, contacts.reducer);

export const { addContact, deleteContact } = contacts.actions;
