import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBooks from './Pages/SearchBooks';
import Bookshelf from './Pages/Bookshelf';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <Routes>
          <Route path="/" element={<SearchBooks />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
