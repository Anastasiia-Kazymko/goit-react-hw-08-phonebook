//import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlise';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsAPI';

export const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const [deleteContact] = useDeleteContactMutation();

  const filterContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {contacts &&
        filterContacts.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
