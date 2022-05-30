import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';
import Product from './Product';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<FeaturedProducts/>} />
          <Route path='/product/:id' element={<Product/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;