import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  caseDailyDeaths,
  dataCovidDaily,
} from '../../../actions/DataCovidDaily';
import './dailyCovid.css';

const DailyCovid = () => {
  const dispatch = useDispatch();

  const dailyCovid = useSelector((state) => state.dailyCovid);
  const handlerCase = (e) => {
    if (e.target.value === 'casehHighTohigh') {
      dispatch(dataCovidDaily('casehHighTohigh'));
    } else if (e.target.value === 'caseLowTohigh') {
      dispatch(dataCovidDaily('caseLowTohigh'));
    } else if (e.target.value === 'deathHighTohigh') {
      dispatch(caseDailyDeaths('deathHighTohigh'));
    } else if (e.target.value === 'deathLowTohigh') {
      dispatch(caseDailyDeaths('deathLowTohigh'));
    }
  };

  useEffect(() => {
    dispatch(dataCovidDaily());
  }, [dispatch]);
  const bgColor = useColorModeValue('white', 'whiteAlpha.50');
  const cardColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');

  return (
    <>
      <Box bg={bgColor} mt="71px">
        <div className="container-dailyCovid">
          <h1>Daily Covid Update South East Asia</h1>
          <select
            className="filter-covidDaily"
            name="filter"
            id="cars"
            onChange={handlerCase}
          >
            <option value="casehHighTohigh">Case High - low</option>
            <option value="caseLowTohigh">Case Low - High</option>
            <option value="deathHighTohigh">Death High - low</option>
            <option value="deathLowTohigh">Death Low - High</option>
          </select>
          <div class="ket-daily">
            <div className="ket-gob">
              <p>Case More than 1.000.000</p>
              <div className="red-strip"></div>{' '}
            </div>
          </div>
          <div className="cards-covid">
            {dailyCovid?.map((daily, index) => (
              <Box
                p="30px 25px"
                w="250px"
                bg={cardColor}
                key={index}
                borderTop={
                  Number(daily.confirmed) > 1000000
                    ? '1px solid red'
                    : '1px solid green'
                }
              >
                <Box paddingBottom="15px" borderBottom="2px">
                  <Heading size="md">{`${daily.countryRegion}`}</Heading>
                </Box>
                <Box mt={5}>
                  <Text>Case:{Number(daily.confirmed).toLocaleString()}</Text>
                  <Text mt={2} mb={2}>
                    Death:{Number(daily.deaths).toLocaleString()}
                  </Text>
                  <Text
                    mt={4}
                    paddingTop="15px"
                    borderTop="2px"
                    fontSize="12px"
                  >
                    Last Update {daily.lastUpdate}
                  </Text>
                </Box>
              </Box>
            ))}
          </div>
        </div>
      </Box>
    </>
  );
};

export default DailyCovid;
