import {
  useFetchContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsAPI';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
});

export const ContactForm = () => {
  const initialValues = {
    name: '',
    phone: '',
  };
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone } = values;
    const addedСontank = contacts.find(contact => contact.name === name);
    if (addedСontank) {
      return alert(`${name} is already in contacts`);
    }
    addContact({ name, phone });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h3>Name</h3>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" />
        <h3>Number</h3>
        <Field
          type="phone"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="phone" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
