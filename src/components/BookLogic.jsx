import React, { useState } from 'react';
import FormInput from './Forms';
import BookList from './BookList';

const BookLogic = () => {
  const [books, setBooks] = useState([]);

  const addBookItem = (title, author, category) => {
    const newBook = {
      item_id: books.length + 1,
      title,
      author,
      category,
    };
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <BookList books={books} />
      {/* Pass the 'books' array as a prop to BookList */}
      <FormInput
        addBookItems={addBookItem}
      />
    </div>
  );
};

export default BookLogic;