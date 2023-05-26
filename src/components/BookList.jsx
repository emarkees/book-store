import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          bookProp={book}
        />
      ))}
    </>
  );
};

export default BookList;
