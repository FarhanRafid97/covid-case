import * as api from '../api/Api';

export const getData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
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
    dispatch({ type: 'FETCH_SUMBAR', payload: sumbar });
  } catch (error) {
    console.log(error);
  }
};

export const dataCovidGlobal = () => async (dispatch) => {
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
    dispatch({ type: 'FETCH_GLOBAL', payload: seratusDataGlobal });
  } catch (error) {
    console.log(error);
  }
};
export const dataCovidDeath = () => async (dispatch) => {
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
    const kematianTingg = seratusDataGlobal.sort(
      (a, b) => parseInt(a.deaths) - parseInt(b.deaths)
    );

    dispatch({ type: 'FETCH_DEATH', payload: kematianTingg.reverse() });
  } catch (error) {
    console.log(error);
  }
};
