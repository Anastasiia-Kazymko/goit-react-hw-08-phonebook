import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from '../../redux/filterSlise';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={onFilter} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
