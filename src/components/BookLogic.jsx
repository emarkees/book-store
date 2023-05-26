import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from './Forms';
import BookList from './BookList';
import { addBook } from '../redux/books/booksSlice';

const BookLogic = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const addBookItem = (title, author, category) => {
    const newBook = {
      item_id: books.length + 1,
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
