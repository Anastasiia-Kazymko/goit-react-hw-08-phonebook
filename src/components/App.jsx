import React from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class Phonebook extends React.Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const addedСontank = this.state.contacts.find(
      contact => contact.name === name
    );
    if (addedСontank) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} value={this.state.filter} />
        <ContactList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
