import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  addContact = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addContact(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          //display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter />
        <ContactList name={this.state.name} />
      </div>
    );
  }
}
