import { ListItem, UnorderedList, Flex, Link, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { Link as ReachLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import navbarData from './navbar.json';
import './navbar.css';
import NavMobile from './NavMobile';
const Navbar = () => {
  const dataNavigasi = navbarData.nav;
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
      <div className="navbar-me">
        <div className="container-navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Box display={['flex', 'none']}>
            <NavMobile dataNavigasi={dataNavigasi} />
          </Box>
          <Box display={['none', 'flex']}>
            <UnorderedList display="flex" listStyleType="none" columnGap="10px">
              {dataNavigasi.map((data, i) => (
                <ListItem key={i}>
                  <Link
                    padding="4px 10px"
                    borderRadius="4px"
                    transition="0.4s"
                    _hover={{ bg: 'gray.400' }}
                    as={ReachLink}
                    to={data.href}
                  >
                    {data.nama}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
