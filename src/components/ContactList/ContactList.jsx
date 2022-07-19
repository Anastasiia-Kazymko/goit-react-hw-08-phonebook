import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              type="Submit"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
