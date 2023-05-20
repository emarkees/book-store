import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Nav from './components/Nav';
import BookList from './components/BookList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <BookList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
