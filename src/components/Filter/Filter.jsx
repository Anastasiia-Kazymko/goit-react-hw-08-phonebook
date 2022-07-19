import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={onFilter} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
