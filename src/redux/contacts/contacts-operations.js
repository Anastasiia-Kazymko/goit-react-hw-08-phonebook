import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('/contacts/FetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk('/contacts/AddContact', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    Notify.success('Contact added');
    return data;
  } catch (error) {
    Notify.failure('Something wrong.. Try again.');
  }
});

const deleteContact = createAsyncThunk('/contacts/DeleteContact', async id => {
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
