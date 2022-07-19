import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
//import initialContacts from '../contacts.json';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Phonebook() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const addContact = (name, number) => {
    const addedСontank = contacts.find(contact => contact.name === name);

    if (addedСontank) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onFilter={onFilter} value={filter} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
