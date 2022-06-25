import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions/DataCovid';
import { hariIni } from '../../actions/function';

const Loading = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataCovid);

  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log(data);

  return (
    <>
      {data.loading ? (
        <div>
          {data.dataSeratus?.map((data) => (
            <ul>
              <li>{data.nama}</li>
              <li>{data.telepon}</li>
            </ul>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Loading;
