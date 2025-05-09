import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Veterinarians from './pages/Veterinarians';
import FindOwners from './pages/FindOwners';
import AddOwner from './pages/AddOwner';
import EditOwner from './pages/EditOwner';
import AddPet from './pages/AddPet';
import AddVisit from './pages/AddVisit';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veterinarians" element={<Veterinarians />} />
        <Route path="/find-owners" element={<FindOwners />} />
        <Route path="/add-owner" element={<AddOwner />} />
        <Route path="/edit-owner/:id" element={<EditOwner />} />
        <Route path="/add-pet/:ownerId" element={<AddPet />} />
        <Route path="/add-visit/:petId" element={<AddVisit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
