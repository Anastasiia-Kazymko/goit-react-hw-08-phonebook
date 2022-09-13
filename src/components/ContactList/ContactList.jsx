import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts/index';
import { getFilter } from 'redux/filterSlise';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { Item, DelButton } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const { deleteContact } = contactsOperations;

  const filterContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts &&
        filterContacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number}
            <DelButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DelButton>
          </Item>
        ))}
    </ul>
  );
};
