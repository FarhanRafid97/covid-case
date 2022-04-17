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
    if (e.target.value === 'confirm') {
      dispatch(dataCovidGlobal());
      setInfo('Berdasarkan Case');
    } else if (e.target.value === 'death') {
      dispatch(dataCovidDeath());
      setInfo('Berdasarkan Kematian');
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
              <option value="confirm">Confirmed High - low</option>
              <option value="death">Death High - low</option>
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
                    <td>{data.confirmed.toLocaleString()}</td>
                    <td>{data.deaths.toLocaleString()}</td>
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
