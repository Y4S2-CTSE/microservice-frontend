import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Product from './pages/product';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
