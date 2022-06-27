import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  ListItem,
  UnorderedList,
  Link,
  Box,
} from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
const NavMobile = ({ dataNavigasi }) => {
  console.log(dataNavigasi);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');
  return (
    <>
      <GiHamburgerMenu onClick={onOpen} />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Box>
              <UnorderedList
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                listStyleType="none"
                rowGap="15px"
              >
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMobile;
