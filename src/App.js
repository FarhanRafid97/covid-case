import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import CovidPage from './components/covidPage/CovidPage.js';

import Home from './components/home/Home.js';
import Navbar from './components/navbar/Navbar.js';
import CovidGlobal from './components/covidPage/CovidGlobal.js';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <CovidPage />
              </>
            }
          />
          <Route path="/covid" element={<CovidGlobal />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
