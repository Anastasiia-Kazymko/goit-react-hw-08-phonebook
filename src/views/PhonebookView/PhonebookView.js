import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Title } from './PhonebookView.styled';

const PhonebookView = () => (
  <Container>
    <Title>Phonebook</Title>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </Container>
);

export default PhonebookView;
