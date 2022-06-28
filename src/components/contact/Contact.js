import React from 'react';
import fotoProfile from '../../img/foto.png';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import {
  Box,
  Flex,
  useColorModeValue,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import './contact.css';

const Contact = () => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const textColor = useColorModeValue('black', 'white');
  return (
    <>
      <Flex
        mt="41px"
        w="100%"
        h="100vh"
        bg={bgColor}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          boxShadow="md"
          bg={bgColor}
          flexDirection="column"
          rowGap="25px"
          padding="45px 25px"
          w="320px"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Image src={fotoProfile} w="200px" alt="" />
          </Box>
          <Flex w="100%">
            <Flex direction="column" w="100%" alignItems="center">
              <Box mb={5} pb="15px" borderBottom="2px" w="100%">
                <Text textAlign="center">Farhan Rafid Syauqi</Text>
              </Box>
              <Flex
                mt={4}
                borderBottom="2px"
                w="100%"
                justifyContent="center"
                fontSize="24px"
                paddingBottom="15px"
                color="white"
                columnGap="15px"
              >
                <Link
                  href="https://www.linkedin.com/in/farhan-rafid-syauqi-268a9820b/"
                  target="_blank"
                >
                  <Text color={textColor}>
                    <BsLinkedin />
                  </Text>
                </Link>
                <Link href="">
                  <Text color={textColor}>
                    <AiFillTwitterCircle />
                  </Text>
                </Link>
                <Link href="https://github.com/FarhanRafid97" target="_blank">
                  <Text color={textColor}>
                    <AiFillGithub />
                  </Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Contact;
