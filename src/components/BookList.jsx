import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProps, removeBook, setUpdate }) => {
  if (!Array.isArray(booksProps)) {
    return null; // or any appropriate fallback component or message
  }
  return (
    <>
      {booksProps.map((book) => (
        <BookItem
          key={book.id}
          bookProp={book}
          removeBook={removeBook}
          setUpdate={setUpdate}
        />
      )) }
    </>
  );
};

BookList.propTypes = {
  booksProps: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default BookList;
