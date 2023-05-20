import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';

const Categories = ({ handleCategoryChange }) => {
  const options = [
    {
      value: 'Action',
      label: 'Action',
    },
    {
      value: 'Friction',
      label: 'Friction',
    },
    {
      value: 'Romance',
      label: 'Romance',
    },
  ];

  const handleChange = (selectedOption) => {
    handleCategoryChange(selectedOption.value);
  };

  return (
    <>
      <Dropdown
        options={options}
        onChange={handleChange}
        placeholder="Category"
      />
    </>
  );
};

Categories.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Categories;
