import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [isMobile, setIstMobile] = useState(false);
  const togleNav = () => setNavMobile(!navMobile);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIstMobile(true);
    } else {
      setIstMobile(false);
    }
  };
  useEffect(() => {
    const bodyTest = () => {
      if (navMobile) {
        document.body.style.overflowY = 'hidden';
        document.body.style.height = '100vh';
      } else {
        document.body.style.overflowY = 'visible';
      }
    };
    bodyTest();
    window.addEventListener('resize', handleResize);
  }, [navMobile]);
  return (
    <nav>
      <div className={navMobile ? 'navbarMobile active' : 'navbarMobile'}>
        <div className="navigasiMobile">
          <div>
            <ImCross
              class={navMobile ? 'exitButton active' : 'exitButton'}
              onClick={togleNav}
            />
          </div>
          <div onClick={togleNav} className="mobileLinkNav">
            <li>
              <Link to="/" className="mobileLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/covid" className="mobileLink">
                Global Case
              </Link>
            </li>
            <li>
              <Link to="/daily" className="mobileLink">
                SEA Case
              </Link>
            </li>
            <li>
              <Link to="/cart" className="mobileLink">
                Cart Version
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mobileLink">
                Contact
              </Link>
            </li>
          </div>
        </div>
      </div>

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
                  Global Case
                </Link>
              </li>
              <li>
                <Link to="/daily" className="link">
                  SEA Case
                </Link>
              </li>
              <li>
                <Link to="/cart" className="mobileLink">
                  Cart Version
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
              <GiHamburgerMenu
                className={navMobile ? 'noneHmbrg' : 'hamburger'}
                onClick={togleNav}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
