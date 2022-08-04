import { hariIni, filterSeaCounrty } from './function';
import * as api from '../api/Api';

export const weeklyIndonesiaCase = (params) => async (dispatch) => {
  try {
    let dataSementara = [];
    for (let i = 5; i < 11; i++) {
      const { data } = await api.dailyCovidUpdate(hariIni(i));
      dataSementara.push(filterSeaCounrty(data, 'Indonesia')[0]);
    }

    dispatch({ type: 'DATA_WEEEKLY_INDONESIA', payload: dataSementara });
  } catch (error) {
    console.log(error);
  }
};
