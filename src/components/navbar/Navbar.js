import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import './navbar.css';
import navbarData from './navbar.json';
import NavMobile from './NavMobile';
const Navbar = () => {
  const dataNavigasi = navbarData.nav;

  return (
    <nav>
      <div className="navbar-me">
        <div className="container-navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Box display={['flex', 'flex', 'none']}>
            <NavMobile dataNavigasi={dataNavigasi} />
          </Box>
          <Box display={['none', ',none', 'flex']}>
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
