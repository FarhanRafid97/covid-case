import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  ListItem,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as ReachLink } from 'react-router-dom';

const NavMobile = ({ dataNavigasi }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                  <ListItem key={i} onClose={onclose}>
                    <Link
                      padding="4px 10px"
                      borderRadius="4px"
                      transition="0.4s"
                      _hover={{ bg: 'gray.400' }}
                      as={ReachLink}
                      to={data.href}
                      onClick={onClose}
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
