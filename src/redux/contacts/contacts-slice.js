import { createSlice } from '@reduxjs/toolkit';
import contactOperations from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoad: false,
  },
  extraReducers: {
    [contactOperations.fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [contactOperations.fetchContacts.pending](state, _) {
      state.isLoading = true;
    },
    [contactOperations.addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [contactOperations.addContact.pending](state, _) {
      state.isLoading = true;
    },
    [contactOperations.addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [contactOperations.deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
      state.isLoading = false;
    },
    [contactOperations.deleteContact.pending](state, _) {
      state.isLoading = true;
    },
  },
});

export default contactsSlice.reducer;
