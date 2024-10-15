import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import CustomerDetails from './components/CustomerDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
