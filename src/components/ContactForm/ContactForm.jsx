import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormWrapper, AddButton, Input } from './ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
});

export const ContactForm = () => {
  const initialValues = {
    name: '',
    phone: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name } = values;
    const addedСontank = contacts.find(contact => contact.name === name);
    if (addedСontank) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(contactsOperations.addContact(values));
    resetForm();
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
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" />
        <h3>Number</h3>
        <Input
          type="phone"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="phone" />
        <AddButton type="submit">Add contact</AddButton>
      </FormWrapper>
    </Formik>
  );
};
