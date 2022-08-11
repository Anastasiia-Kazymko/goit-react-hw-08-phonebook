//import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              type="Submit"
              onClick={() => {
                dispatch(deleteContact(id));
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
};
