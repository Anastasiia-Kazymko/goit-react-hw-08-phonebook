import { useSelector, useDispatch } from 'react-redux';
import { filteredContacts, getFilter } from '../../redux/filterSlise';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filteredContacts(e.target.value))}
      />
    </>
  );
};
