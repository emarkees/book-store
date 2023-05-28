import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../index.css';

const generateRandomId = () => {
  const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 8;

  let randomId = '';
  for (let i = 0; i < idLength; i += 1) {
    const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
    randomId += alphanumericCharacters[randomIndex];
  }

  return randomId;
};

const FormInput = () => {
  const [book, setBook] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (book.trim() && author.trim() && category) {
      setLoading(true);
      dispatch(addBook({
        item_id: generateRandomId(), title: book, author, category,
      }));
      setBook('');
      setAuthor('');
      setCategory('');
      setMessage('');
      setLoading(false);
      // dispatch(fetchBooks());
    } else {
      setMessage('Please add all required information');
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
    'Fiction',
    'Non Friction',
    'Romance',
    // Add more categories as needed
  ];

  return (
    <>
      {loading && <div>Loading...</div>}
      <div className="head-title">ADD A NEW BOOK</div>
      <span className="error-message">{message}</span>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={book}
          onChange={handleBook}
          placeholder="Book Title"
          className="title-input"
        />
        <input
          type="text"
          value={author}
          onChange={handleAuthor}
          placeholder="Book Author"
          className="author-input"
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
          Add Book
        </button>
      </form>
    </>
  );
};

export default FormInput;
