import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCovidGlobal, dataCovidDeath } from '../../../actions/DataCovid.js';
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
      setInfo('Case Low To High');
    }
  };

  useEffect(() => {
    dispatch(dataCovidGlobal());
    setInfo('Berdasarkan Case');
  }, []);
  console.log(dataGlobal);

  return (
    <>
      <div>
        <div className="container-covidGlobal">
          <div class="covid-content-global">
            <h3>{info}</h3>
            <select
              className="filter"
              name="filter"
              id="cars"
              onChange={handlerCase}
            >
              <option value="casehHighTohigh">Confirmed High - low</option>
              <option value="caseLowTohigh">Case Low - High</option>
              <option value="deathHighTohigh">Death High - low</option>
              <option value="deathLowTohigh">Death Low - High</option>
            </select>
            <table className="table is-striped ">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>👻 Case</th>
                  <th>💀 Death</th>
                </tr>
              </thead>
              <tbody>
                {dataGlobal?.map((data, index) => (
                  <tr key={index}>
                    <td>{`${index + 1}.${getFlagEmoji(data.iso2)} ${
                      data.countryRegion
                    }`}</td>
                    <td
                      className={
                        data.confirmed > 5000000 ? 'dangerCase' : 'normalCase'
                      }
                    >
                      {data.confirmed.toLocaleString()}
                    </td>
                    <td
                      className={
                        data.deaths > 100000 ? 'dangerDeaths' : 'normalDeaths'
                      }
                    >
                      {data.deaths.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidProv;
