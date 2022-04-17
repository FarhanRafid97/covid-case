import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataCovidDaily } from '../../../actions/DataCovidDaily';
import './dailyCovid.css';

const DailyCovid = () => {
  const dispatch = useDispatch();
  const dailyCovid = useSelector((state) => state.dailyCovid);

  useEffect(() => {
    dispatch(dataCovidDaily());
  }, []);
  console.log(dailyCovid);

  return (
    <>
      <div className="dailyCovid">
        <div className="container-dailyCovid">
          <h1>Daily Covid Update South East Asia</h1>
          <select
            className="filter"
            name="filter"
            id="cars"
            onChange={(e) => dispatch(dataCovidDaily(e.target.value))}
          >
            <option value="casehHighTohigh">Confirmed High - low</option>
            <option value="caseLowTohigh">Case Low - High</option>
            <option value="deathHighTohigh">Death High - low</option>
            <option value="deathLowTohigh">Death Low - High</option>
          </select>
          <div className="cards-covid">
            {dailyCovid.map((daily, index) => (
              <div
                className={
                  daily.confirmed > 1000000 ? 'card-covid danger' : 'card-covid'
                }
                key={index}
              >
                <div className="country">
                  <h3 className="">{`${daily.countryRegion}`}</h3>
                </div>
                <div className="case">
                  <p className="confirmed">
                    Case:{Number(daily.confirmed).toLocaleString()}
                  </p>
                  <p className="death">
                    Death:{Number(daily.deaths).toLocaleString()}
                  </p>
                  <p className="update">Last Update {daily.lastUpdate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyCovid;
