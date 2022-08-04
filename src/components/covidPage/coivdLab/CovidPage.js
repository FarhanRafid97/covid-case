import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../actions/DataCovid.js';
import './covidPage.css';

const CovidPage = () => {
  const dispatch = useDispatch();

  let dataLab = useSelector((state) => state.covidLab);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="container-covid">
          <div class="covid-content">
            <h3>Laboratorium Covid Sumatera Barat</h3>
            <table className="table is-striped ">
              <thead>
                <tr>
                  <th>Provinsi</th>
                  <th>Nomor Hp</th>
                  <th>Alamat</th>
                  <th>Nama Lab</th>
                </tr>
              </thead>
              <tbody>
                {dataLab.map((data, index) => (
                  <tr key={index}>
                    <td>{data.provinsi}</td>
                    <td>{data.kontak_phone}</td>
                    <td>{data.alamat}</td>
                    <td>{data.nama_lab}</td>
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

export default CovidPage;
