import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormWrapper, AddButton, Input } from './ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
});

const initialValues = {
  name: '',
  phone: '',
};

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
    const addedСontank = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (addedСontank) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(contactsOperations.addContact({ name, phone }));

    setName('');
    setPhone('');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
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
        <ErrorMessage name="name" />
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
        <ErrorMessage name="phone" />
        <AddButton type="submit">Add contact</AddButton>
      </FormWrapper>
    </Formik>
  );
};
