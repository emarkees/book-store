import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProps, removeBook, setUpdate }) => (
  <>
    {booksProps.map((book) => (
      <BookItem
        key={book.id}
        bookProp={book}
        removeBook={removeBook}
        setUpdate={setUpdate}
      />
    ))}
  </>
);

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other expected properties of the book object
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default BookList;
