import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const fetchContacts = createAsyncThunk('/contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk(
  '/contacts/addContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      Notify.success('Contact added');
      return data;
    } catch (error) {
      Notify.failure('Something wrong.. Try again.');
    }
  }
);

const deleteContact = createAsyncThunk('/contacts/deleteContact', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    Notify.success('Contact deleted');
    return id;
  } catch (error) {
    Notify.failure('Something wrong.. Try again.');
  }
});

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
