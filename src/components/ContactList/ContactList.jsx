import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlise';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsAPI';
import { Item, DelButton } from './ContactList.styled';

export const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const [deleteContact] = useDeleteContactMutation();

  const filterContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {contacts &&
        filterContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            {name}: {phone}
            <DelButton
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </DelButton>
          </Item>
        ))}
    </ul>
  );
};
