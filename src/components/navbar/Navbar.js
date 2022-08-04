import {
  Box,
  Flex,
  Link,
  ListItem,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { Link as ReachLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import './navbar.css';
import navbarData from './navbar.json';
import NavMobile from './NavMobile';

const Navbar = () => {
  const dataNavigasi = navbarData.nav;

  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const IconDarkMode = useColorModeValue(<BsFillMoonFill />, <BsFillSunFill />);

  return (
    <Flex bgColor={bgColor} position="fixed" w="100%" top="0">
      <Flex justifyContent="space-between" w="100%">
        <div className="container-navbar">
          <Box w="50px">
            <img src={logo} alt="" />
          </Box>
          <Box display={['flex', 'flex', 'none', 'none']}>
            <NavMobile dataNavigasi={dataNavigasi} />
          </Box>
          <Box display={['none', ',none', 'flex', 'flex']}>
            <UnorderedList
              display="flex"
              listStyleType="none"
              columnGap={['5px', '5px', '5px', '10px']}
              alignItems="center"
            >
              {dataNavigasi.map((data, i) => (
                <ListItem key={i}>
                  <Link
                    padding="4px 10px"
                    borderRadius="4px"
                    fontSize={['12px', '12px', '12px', '18px']}
                    transition="0.4s"
                    _hover={{ bg: 'gray.400' }}
                    as={ReachLink}
                    to={data.href}
                  >
                    {data.nama}
                  </Link>
                </ListItem>
              ))}
              <ListItem>
                <Box
                  colorScheme="blackAlpha"
                  onClick={toggleColorMode}
                  size="lg"
                >
                  {IconDarkMode}
                </Box>
              </ListItem>
            </UnorderedList>
          </Box>
        </div>
      </Flex>
    </Flex>
  );
};

export default Navbar;
