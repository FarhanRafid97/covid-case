import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-me">
        <div class="container-navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigasi">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/covid" className="link">
                  Covid
                </Link>
              </li>
              <li>
                <Link to="/covid" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/covid" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
