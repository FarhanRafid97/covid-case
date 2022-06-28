import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Flex,
  Tr,
  Heading,
  Box,
  Select,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCovidDeath, dataCovidGlobal } from '../../../actions/DataCovid.js';

const CovidProv = () => {
  const dispatch = useDispatch();
  const dataGlobal = useSelector((state) => state.covidGlobal);
  const [info, setInfo] = useState('');
  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }
  const handlerCase = (e) => {
    if (e.target.value === 'casehHighTohigh') {
      dispatch(dataCovidGlobal('casehHighTohigh'));
      setInfo('Case High To Low');
    } else if (e.target.value === 'caseLowTohigh') {
      dispatch(dataCovidGlobal('caseLowTohigh'));
      setInfo('Case Low To High');
    } else if (e.target.value === 'deathHighTohigh') {
      dispatch(dataCovidDeath('deathHighTohigh'));
      setInfo('Death High To Low');
    } else if (e.target.value === 'deathLowTohigh') {
      dispatch(dataCovidDeath('deathLowTohigh'));
      setInfo('Death Low To High');
    }
  };

  useEffect(() => {
    dispatch(dataCovidGlobal());
  }, [dispatch]);
  console.log(dataGlobal);

  return (
    <>
      <Box>
        <Flex direction="column" w="100%" alignItems="center" rowGap="25px">
          <Heading fontSize={['18px', '24px']}> Top 100 {info}</Heading>
          <Select
            width="300px"
            size={['xs', 'md']}
            name="filter"
            id="cars"
            onChange={handlerCase}
          >
            <option value="casehHighTohigh">Case High - low</option>
            <option value="caseLowTohigh">Case Low - High</option>
            <option value="deathHighTohigh">Death High - low</option>
            <option value="deathLowTohigh">Death Low - High</option>
          </Select>
          <Flex
            fontSize={['12px']}
            direction={['column', 'row']}
            justifyContent="space-between"
            w="80%"
            rowGap="15px"
          >
            <Flex
              className="ket-gob"
              justifyContent="center"
              alignItems="center"
              columnGap="5px"
            >
              <Text>Case More than 5.000.000</Text>
              <Box w="50px" h="5px" bg="red"></Box>
            </Flex>
            <Flex
              className="ket-gob"
              justifyContent="center"
              alignItems="center"
              columnGap="5px"
            >
              <Text>Death More than 100.000</Text>
              <Box w="50px" h="5px" bg="red"></Box>
            </Flex>
          </Flex>
          <TableContainer w={['95%', '80%']}>
            <Table variant="striped" colorScheme="blackAlpha">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th fontSize={['10px', '14px']}>Country</Th>
                  <Th fontSize={['10px', '14px']}>Case</Th>
                  <Th fontSize={['10px', '14px']}>Death</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataGlobal?.map((data, index) => (
                  <Tr key={index} fontSize={['10px', '14px']}>
                    <Td>{`${index + 1}.${getFlagEmoji(data.iso2)} ${
                      data.countryRegion
                    }`}</Td>
                    <Td
                      color={data.confirmed > 5000000 ? 'red.400' : 'green.400'}
                    >
                      {data.confirmed.toLocaleString()}
                    </Td>
                    <Td color={data.deaths > 100000 ? 'red.400' : 'green.400'}>
                      {data.deaths.toLocaleString()}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
    </>
  );
};

export default CovidProv;
