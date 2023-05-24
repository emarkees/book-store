import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-dropdown-select';

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

  const handleChange = (selectedOptions) => {
    if (selectedOptions.length > 0) {
      handleCategoryChange(selectedOptions[0].value);
    } else {
      handleCategoryChange('');
    }
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="Category"
      dropdownHandle={false} // Hide the default dropdown handle
      dropdownGap={0} // Remove the gap between the input and dropdown
    />
  );
};

Categories.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Categories;
