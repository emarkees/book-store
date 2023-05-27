import React from 'react';
import { useDispatch } from 'react-redux';
import FormInput from './Forms';
import BookList from './BookList';
import { addBook } from '../redux/books/booksSlice';

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
    <div>
      <BookList />
      <FormInput addBookItem={addBookItem} />
    </div>
  );
};

export default BookLogic;
