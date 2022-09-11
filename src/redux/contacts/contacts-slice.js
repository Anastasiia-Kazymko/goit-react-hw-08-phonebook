import { createSlice } from '@reduxjs/toolkit';
import contactOperations from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoad: false,
  },
  extraReducers: {
    [contactOperations.fetchContacts.pending](state) {
      state.isLoad = true;
    },
    [contactOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoad = false;
    },
    [contactOperations.fetchContacts.rejected](state) {
      state.isLoad = false;
    },
    [contactOperations.addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoad = false;
    },
    [contactOperations.addContact.pending](state) {
      state.isLoad = true;
    },
    [contactOperations.addContact.rejected](state) {
      state.isLoad = false;
    },
    [contactOperations.deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.isLoad = false;
    },
    [contactOperations.deleteContact.pending](state) {
      state.isLoad = true;
    },
    [contactOperations.deleteContact.rejected](state) {
      state.isLoad = false;
    },
  },
});

export default contactsSlice.reducer;
