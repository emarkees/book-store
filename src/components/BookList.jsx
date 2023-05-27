import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      {books.map((book) => (
        <BookItem key={book.item_id} bookProp={book} />
      ))}
    </>
  );
};

export default BookList;

/* import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  // Add a conditional check to ensure books is an array
  if (!Array.isArray(books)) {
    return <div>No books found.</div>; // or handle the error appropriately
  }

  return (
    <>
      {books.map((book) => (
        <BookItem key={book.item_id} bookProp={book} />
      ))}
    </>
  );
};

export default BookList; */
