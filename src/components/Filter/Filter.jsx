import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={onFilter} />
    </>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
