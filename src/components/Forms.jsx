import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ addBookItems }) => {
  const [book, setBook] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.trim() && author.trim() && category) {
      addBookItems(book, author, category);
      setBook('');
      setAuthor('');
      setCategory('');
      setMessage('');
    } else {
      setMessage('please add Item');
    }
  };

  const handleBook = (e) => {
    setBook(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const categories = [
    'Action',
    'Friction',
    'Romance',
    // Add more categories as needed
  ];

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <span className="error-message">{message}</span>
        <input
          type="text"
          value={book}
          onChange={handleBook}
          placeholder="Book Title"
        />
        <input
          type="text"
          value={author}
          onChange={handleAuthor}
          placeholder="Book Author"
        />
        <select
          name="select"
          id="category"
          value={category}
          onChange={handleCategory}
        >
          <option value="">Category</option>
          {categories.map((categoryOption) => (
            <option key={categoryOption} value={categoryOption}>
              {categoryOption}
            </option>
          ))}
        </select>
        <button type="submit" className="input-submit">
          Add
        </button>
      </form>
    </>
  );
};

FormInput.propTypes = {
  addBookItems: PropTypes.func.isRequired,
};

export default FormInput;
