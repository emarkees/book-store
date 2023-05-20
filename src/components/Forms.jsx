import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Categories from '../Pages/Categories';

const FormInput = ({ addBookItem }) => {
  const [book, setBook] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.trim()) {
      addBookItem(book, category, author); // Pass the book, category, and author values
      setBook('');
      setAuthor('');
    }
  };

  const handleBookChange = (e) => {
    setBook(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Title"
          value={book}
          onChange={handleBookChange}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
        />
        <button type="button" className="input-submit">Add</button>
      </form>
      <p>
        Current book:
        {book}
      </p>
      {/* Display the book state value */}
      <Categories handleCategoryChange={handleCategoryChange} />
      {/* Pass the handleCategoryChange function */}
    </>
  );
};

FormInput.propTypes = {
  addBookItem: PropTypes.func.isRequired,
};

export default FormInput;
