//Creating Routes with TypeScript in React
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
