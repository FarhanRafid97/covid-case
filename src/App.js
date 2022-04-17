import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CovidPage from './components/covidPage/coivdLab/CovidPage.js';

import Home from './components/home/Home.js';
import Navbar from './components/navbar/Navbar.js';
import CovidGlobal from './components/covidPage/covidGlobal/CovidGlobal.js';
import DailyCovid from './components/covidPage/dailyCovid/DailyCovid.js';

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
          <Route path="/daily" element={<DailyCovid />} />
        </Routes>
      </div>
    </>
  );
};

export default App;