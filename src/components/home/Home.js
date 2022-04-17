import React from 'react';
import covidPict from '../../img/covid1.png';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div class="container-home">
        <div className="content1">
          <div class="text-content1">
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
