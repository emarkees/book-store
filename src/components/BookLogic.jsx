import React, { useState } from 'react';
import FormInput from './Forms';
import BookList from './BookList';

const BookLogic = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('');

  const addBookItem = (title, category) => {
    const newBook = {
      id: books.length + 1,
      title,
      category,
    };
    setBooks([...books, newBook]);
  };

  const setUpdate = (updatedBook, id) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, title: updatedBook };
        }
        return book;
      }),
    );
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      <BookList
        booksProps={books}
        setUpdate={setUpdate}
        category={category} // Pass the category state to BookList
      />
      <FormInput
        addBookItem={addBookItem}
        handleCategoryChange={handleCategoryChange}
      />
    </div>
  );
};

export default BookLogic;
