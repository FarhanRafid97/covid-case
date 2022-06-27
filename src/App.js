import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact.js';
import CartPage from './components/covidPage/cart/CartPage.js';
import CovidGlobal from './components/covidPage/covidGlobal/CovidGlobal.js';
import DailyCovid from './components/covidPage/dailyCovid/DailyCovid.js';
import Home from './components/home/Home.js';
import Navbar from './components/navbar/Navbar.js';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid" element={<CovidGlobal />} />
          <Route path="/daily" element={<DailyCovid />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
