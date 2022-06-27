import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { default as React, default as React } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import './navbar.css';
import navbarData from './navbar.json';

const NavigasiMenus = () => {
  const dataNavigasi = navbarData.nav;
  return (
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
  );
};

export default NavigasiMenus;
