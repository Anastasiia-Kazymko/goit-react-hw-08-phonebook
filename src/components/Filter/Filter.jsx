import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from '../../redux/filterSlise';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onFilter = e => {
    dispatch(filteredContacts(e.currentTarget.value.trim()));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={onFilter} />
    </>
  );
};
