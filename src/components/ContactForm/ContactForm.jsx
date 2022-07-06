//import PropTypes from 'prop-types';
//import { Title, Rating } from 'components/Statistics/Statistics.styled';

export const ContactForm = ({ handleChange, addContact }) => {
  return (
    <form onSubmit={addContact}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

/* Contacts.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
}; */
