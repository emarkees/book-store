import React, { useState } from 'react';
import FormInput from './Forms';
import BookList from './BookList';

const BookLogic = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('');

  const addBookItem = (title, author, category) => {
    const newBook = {
      id: books.length + 1,
      title,
      author,
      category,
    };
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    // Placeholder implementation - remove the book with the given id from the list
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const setUpdate = (updatedBook, id) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, title: updatedBook } : book)),
    );
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      <BookList
        booksProps={books}
        removeBook={removeBook}
        category={category}
        setUpdate={setUpdate}
      />
      <FormInput
        addBookItems={addBookItem}
        handleCategoryChange={handleCategoryChange}
      />
    </div>
  );
};

export default BookLogic;
