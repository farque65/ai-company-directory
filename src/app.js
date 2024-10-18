import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TheDetails from './pages/AiCompanyDetails/AiCompanyDetails';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
// @ts-ignore
        path="/" element={<Home />} />
        <Route path="/ai-company/:name" 
// @ts-ignore
        element={<TheDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;