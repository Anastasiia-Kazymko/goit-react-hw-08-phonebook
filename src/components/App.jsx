import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
//import initialContacts from '../contacts.json';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { addContact, deleteContact } from '../redux/store';

export default function Phonebook() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contact.items);
  const filter = useSelector(state => state.contact.filter);
  //console.log(items, filter);
  /* const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState(''); */

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(items));
  });

  const addContact = (name, number) => {
    const addedСontank = items.find(contact => contact.name === name);

    if (addedСontank) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(items.filter(({ id }) => id !== contactId));
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
