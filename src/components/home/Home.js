import { Flex, Box, useColorModeValue, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import covidPict from '../../img/covid1.png';
import './home.css';
import './mobileHome.css';

const Home = () => {
  const lebarWindow = window.innerWidth;
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  useEffect(() => {}, []);
  return (
    <Flex w="100%" h="100vh" bg={bgColor} alignItems="center" mt="71px">
      <Box w="100%">
        <div className="container-home">
          <div className="content1">
            <div className="text-content1">
              {lebarWindow < 500 && (
                <img src={covidPict} className="foto-covid" alt="" />
              )}
              <Text>Welcome To my Page</Text>
              <Text>Updated Covid 19 Case</Text>
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
      </Box>
    </Flex>
  );
};

export default Home;
