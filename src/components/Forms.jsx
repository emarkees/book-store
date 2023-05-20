import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Categories from '../Pages/Categories';

const FormInput = ({ addBookItem }) => {
  const [book, setBook] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.trim()) {
      addBookItem(book, category); // Pass the book and category values
      setBook('');
      setCategory('');
    }
  };

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add a book"
          value={book}
          onChange={handleChange}
        />
        <button type="button" className="input-submit">Add</button>
      </form>
      <p>
        Current books:
        {book}
      </p>
      {' '}
      {/* Display the book state value */}
      <Categories handleCategoryChange={handleCategoryChange} />
      {' '}
      {/* Pass the handleCategoryChange function */}
    </>
  );
};

FormInput.propTypes = {
  addBookItem: PropTypes.func.isRequired,
};

export default FormInput;
