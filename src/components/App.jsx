import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addNewContact } from '../redux/contactsSlice';
import { filteredContacts } from '../redux/filterSlise';
//import initialContacts from '../contacts.json';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Phonebook() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const addContact = (name, number) => {
    console.log(name, number);
    const addedСontank = contacts.find(contact => contact.name === name);
    if (addedСontank) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addNewContact({ id: nanoid(), name, number }));
  };

  const onFilter = e => {
    dispatch(filteredContacts(e.currentTarget.value.trim()));
  };
  const filterContacts = () => {
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onFilter={onFilter} />
      <ContactList contacts={filterContacts()} />
    </div>
  );
}
