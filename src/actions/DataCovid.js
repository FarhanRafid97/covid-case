import { useState } from 'react';
import * as api from '../api/Api';

export const getData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    const dataSeratus = [];
    for (let i = 0; i < 100; i++) {
      dataSeratus.push(data[i]);
    }

    dispatch({ type: 'FETCH_DATA', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const dataSumbar = () => async (dispatch) => {
  try {
    const { data } = await api.dataLab();
    const sumbar = data.filter(
      (d) => d.provinsi === 'SUMATERA BARAT' && d.alamat !== ''
    );
    dispatch({ type: 'FETCH_SUMBAR', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const dataCovidGlobal = (params) => async (dispatch) => {
  try {
    const { data } = await api.dataCovidGlobal();
    const dataBerurutan = data.sort(
      (a, b) => parseInt(a.confirmed) - parseInt(b.confirmed)
    );
    const dataTertinggi = dataBerurutan.reverse();
    const seratusDataGlobal = [];
    for (let i = 0; i < 100; i++) {
      seratusDataGlobal.push(dataTertinggi[i]);
    }

    const filteredData = (param) => {
      if (param === 'caseLowTohigh') return seratusDataGlobal.reverse();
      if (param === 'casehHighTohigh') return seratusDataGlobal;

      return seratusDataGlobal;
    };
    dispatch({ type: 'FETCH_GLOBAL', payload: filteredData(params) });
  } catch (error) {
    console.log(error);
  }
};

export const dataCovidDeath = (params) => async (dispatch) => {
  try {
    const { data } = await api.dataCovidGlobal();
    const dataBerurutan = data.sort(
      (a, b) => parseInt(a.confirmed) - parseInt(b.confirmed)
    );
    const dataTertinggi = dataBerurutan.reverse();
    const seratusDataGlobal = [];
    for (let i = 0; i < 100; i++) {
      seratusDataGlobal.push(dataTertinggi[i]);
    }
    const deathCase = seratusDataGlobal.sort(
      (a, b) => parseInt(a.deaths) - parseInt(b.deaths)
    );

    const filteredData = (param) => {
      if (param === 'deathLowTohigh') return deathCase;
      if (param === 'deathHighTohigh') return deathCase.reverse();
    };
    dispatch({ type: 'FETCH_DEATH', payload: filteredData(params) });
  } catch (error) {
    console.log(error);
  }
};
