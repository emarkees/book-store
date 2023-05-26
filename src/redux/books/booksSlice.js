import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: // Initial state:
  [
    {
      item_id: 0,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 1,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 2,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload); // Update the books array with the new book
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
    // Other actions for updating the books state
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
