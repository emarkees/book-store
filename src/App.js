import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Nav from './components/Nav';

function App() {
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
