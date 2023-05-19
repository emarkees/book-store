import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Categories from './Pages/Categories';

function App() {
  return (
    <BroswerRoute>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BroswerRoute>
  );
}

export default App;
