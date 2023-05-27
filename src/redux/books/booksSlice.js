import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XKLrcF8yEfNG679PvMbv/books';

const initialState = {
  books: [],
  status: 'notStarted',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios(API);
    const booksWithId = Object.entries(response.data).map(([id, book]) => ({ id, book: book[0] }));
    return booksWithId;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook, thunkAPI) => {
  try {
    await axios.post(API, newBook);
    const response = await thunkAPI.dispatch(fetchBooks());
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const removeBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    const response = await axios.delete(`${API}/${bookId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'success';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addBook.fulfilled, (state) => {
        state.status = 'success';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export const booksReducer = booksSlice.reducer;

export const selectBooks = (state) => state.books.books;
export const selectBooksStatus = (state) => state.books.status;
export const selectBooksError = (state) => state.books.error;

export default booksSlice.reducer;
