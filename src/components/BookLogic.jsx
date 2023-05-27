import React from 'react';
import { useDispatch } from 'react-redux';
import FormInput from './Forms';
import BookList from './BookList';
import { addBook } from '../redux/books/booksSlice';
import '../index.css';

const BookLogic = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line camelcase
  const addBookItem = (item_id, title, author, category) => {
    const newBook = {
      // eslint-disable-next-line camelcase
      item_id,
      title,
      author,
      category,
    };
    dispatch(addBook(newBook)); // Dispatch the addBook action with the new book
  };

  return (
    <div className="Logic-wrapper">
      <div className="list-wrapper">
        <BookList />
      </div>
      <div className="logic">
        <FormInput addBookItem={addBookItem} />
      </div>
    </div>
  );
};

export default BookLogic;
