// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import RedirectToHome from './Components/RedirectToHome';
import Home from './Screens/Home';  
import About from './Screens/About';
import Contact from './Screens/Contact';
import UserProfile from './Screens/UserProfile';

const App: React.FC = () => {
  
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/redirect" element={<RedirectToHome />} />
          <Route path="/userprofile/:username" element={<UserProfile />} />       
   
        </Routes>
      </div>
    </Router>
  );
};

export default App;
