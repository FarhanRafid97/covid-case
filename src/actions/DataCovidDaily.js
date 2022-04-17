import { hariIni, filterSeaCounrty } from './function';
import * as api from '../api/Api';
//random data covid daily
export const dataCovidDaily = (params) => async (dispatch) => {
  try {
    const { data } = await api.dailyCovidUpdate(hariIni());

    const indonesiaDaily = filterSeaCounrty(data, 'Indonesia');
    const laos = filterSeaCounrty(data, 'Laos');
    const brunei = filterSeaCounrty(data, 'Brunei');
    const timorLeste = filterSeaCounrty(data, 'Timor-Leste');
    const malaysia = filterSeaCounrty(data, 'Malaysia');
    const vietnam = filterSeaCounrty(data, 'Vietnam');
    const thailand = filterSeaCounrty(data, 'Thailand');
    const singapore = filterSeaCounrty(data, 'Singapore');
    const philippines = filterSeaCounrty(data, 'Philippines');

    const seaCountry = [
      laos[0],
      brunei[0],
      indonesiaDaily[0],
      timorLeste[0],
      philippines[0],
      singapore[0],
      thailand[0],
      vietnam[0],
      malaysia[0],
    ];
    const highCase = seaCountry.sort(
      (a, b) => Number(a.confirmed) - Number(b.confirmed)
    );
    const highDeaths = seaCountry.sort(
      (a, b) => Number(a.deaths) - Number(b.deaths)
    );

    const filteredData = (param) => {
      if (param === 'caseLowTohigh') return highCase;
      if (param === 'casehHighTohigh') return highCase.reverse();
      if (param === 'deathLowTohigh') return highDeaths;
      if (param === 'deathHighTohigh') return highDeaths.reverse();

      return highDeaths;
    };

    dispatch({ type: 'FETCH_DAILY', payload: filteredData(params) });
  } catch (error) {
    console.log(error);
  }
};
// export const caseDailyHigh = () => async (dispatch) => {
//   try {
//     const { data } = await api.dailyCovidUpdate(hariIni());

//     const indonesiaDaily = filterSeaCounrty(data, 'Indonesia');
//     const laos = filterSeaCounrty(data, 'Laos');
//     const brunei = filterSeaCounrty(data, 'Brunei');
//     const timorLeste = filterSeaCounrty(data, 'Timor-Leste');
//     const malaysia = filterSeaCounrty(data, 'Malaysia');
//     const vietnam = filterSeaCounrty(data, 'Vietnam');
//     const thailand = filterSeaCounrty(data, 'Thailand');
//     const singapore = filterSeaCounrty(data, 'Singapore');
//     const philippines = filterSeaCounrty(data, 'Philippines');

//     const seaCountry = [
//       laos[0],
//       brunei[0],
//       indonesiaDaily[0],
//       timorLeste[0],
//       philippines[0],
//       singapore[0],
//       thailand[0],
//       vietnam[0],
//       malaysia[0],
//     ];

//     dispatch({ type: 'FETCH_HIGH_DAILY', payload: highCase });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const caseDailyDeaths = (params) => async (dispatch) => {
//   try {
//     const { data } = await api.dailyCovidUpdate(hariIni());

//     const indonesiaDaily = filterSeaCounrty(data, 'Indonesia');
//     const laos = filterSeaCounrty(data, 'Laos');
//     const brunei = filterSeaCounrty(data, 'Brunei');
//     const timorLeste = filterSeaCounrty(data, 'Timor-Leste');
//     const malaysia = filterSeaCounrty(data, 'Malaysia');
//     const vietnam = filterSeaCounrty(data, 'Vietnam');
//     const thailand = filterSeaCounrty(data, 'Thailand');
//     const singapore = filterSeaCounrty(data, 'Singapore');
//     const philippines = filterSeaCounrty(data, 'Philippines');

//     const seaCountry = [
//       laos[0],
//       brunei[0],
//       indonesiaDaily[0],
//       timorLeste[0],
//       philippines[0],
//       singapore[0],
//       thailand[0],
//       vietnam[0],
//       malaysia[0],
//     ];

//     const filteredData = (param) => {
//       if (param === 'matiHighToLow') return highCase.reverse();

//       return highCase;
//     };

//     dispatch({ type: 'FETCH_DEATH_DAILY', payload: filteredData(params) });
//   } catch (error) {
//     console.log(error);
//   }
// };
