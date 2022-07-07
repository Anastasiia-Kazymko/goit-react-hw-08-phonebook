import React from 'react';

//import PropTypes from 'prop-types';
//import { Title, Rating } from 'components/Statistics/Statistics.styled';

export class ContactForm extends React.Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
    //console.log(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

/* Contacts.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
}; */
