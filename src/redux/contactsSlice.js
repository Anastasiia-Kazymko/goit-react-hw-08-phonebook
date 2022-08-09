import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contacts = createSlice({
  name: 'contacts',
  initialState: [],
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

        state.push(action.payload);
      },
      newContact: (name, number) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contacts.actions;
