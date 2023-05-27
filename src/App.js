import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Nav from './components/Nav';
import { fetchBooks } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
