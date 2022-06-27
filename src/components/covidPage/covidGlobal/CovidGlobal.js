import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCovidDeath, dataCovidGlobal } from '../../../actions/DataCovid.js';
import './covidGlobal.css';

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
      <div>
        <div className="container-covidGlobal">
          <div class="covid-content-global">
            <h3>Top 100 {info}</h3>
            <select
              className="filter"
              name="filter"
              id="cars"
              onChange={handlerCase}
            >
              <option value="casehHighTohigh">Case High - low</option>
              <option value="caseLowTohigh">Case Low - High</option>
              <option value="deathHighTohigh">Death High - low</option>
              <option value="deathLowTohigh">Death Low - High</option>
            </select>
            <div className="keterangan-global">
              <div className="ket-gob">
                <p>Case More than 5.000.000</p>
                <div className="red-strip"></div>{' '}
              </div>
              <div className="ket-gob">
                <p>Death More than 100.000</p>
                <div className="red-strip"></div>{' '}
              </div>
            </div>
            <TableContainer>
              <Table variant="striped" colorScheme="blackAlpha">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Country</Th>
                    <Th>Case</Th>
                    <Th>Death</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataGlobal?.map((data, index) => (
                    <Tr key={index}>
                      <Td>{`${index + 1}.${getFlagEmoji(data.iso2)} ${
                        data.countryRegion
                      }`}</Td>
                      <Td
                        className={
                          data.confirmed > 5000000 ? 'dangerCase' : 'normalCase'
                        }
                      >
                        {data.confirmed.toLocaleString()}
                      </Td>
                      <Td
                        className={
                          data.deaths > 100000 ? 'dangerDeaths' : 'normalDeaths'
                        }
                      >
                        {data.deaths.toLocaleString()}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidProv;
