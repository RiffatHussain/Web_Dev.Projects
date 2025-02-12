import React from 'react'

import './index.css'; 
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Login from "./components/LoginForm"
import AboutUs from "./components/AboutUs"
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path='/products' element={<Product />} />
          </Routes>
      </Router>
      
  
  )
}

export default App
