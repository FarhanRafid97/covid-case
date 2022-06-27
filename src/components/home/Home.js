import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import covidPict from '../../img/covid1.png';
import './home.css';
import './mobileHome.css';

const Home = () => {
  const lebarWindow = window.innerWidth;

  useEffect(() => {}, []);
  return (
    <div className="home">
      <div className="container-home">
        <div className="content1">
          <div className="text-content1">
            {lebarWindow < 500 && (
              <img src={covidPict} className="foto-covid" alt="" />
            )}
            <h3>Welcome To my Page</h3>
            <h3>Updated Covid 19 Case</h3>
            <Link to="/covid" className="explore">
              EXPLORE
            </Link>
          </div>
        </div>
        <div className="content2">
          <div class="image-content2">
            <img src={covidPict} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
