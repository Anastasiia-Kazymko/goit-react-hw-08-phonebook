import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
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
    Notiflix.Notify.success('Сontact removed from list');
  };

  return (
    <ul>
      {contacts &&
        filterContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            {name}: {phone}
            <DelButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DelButton>
          </Item>
        ))}
    </ul>
  );
};
