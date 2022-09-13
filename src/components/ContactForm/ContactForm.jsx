import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { contactsOperations } from 'redux/contacts';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { FormWrapper, AddButton, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const addedСontank = contacts.find(contact => contact.name === name);
    if (addedСontank) {
      return Notify.failure(`${name} is already in contacts`);
    }
    dispatch(contactsOperations.addContact({ name, number: phone }));

    setName('');
    setPhone('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h3>Name</h3>
      <Input
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
      />
      <h3>Number</h3>
      <Input
        onChange={handleChange}
        type="phone"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
      />
      <AddButton type="submit">Add contact</AddButton>
    </FormWrapper>
  );
};
