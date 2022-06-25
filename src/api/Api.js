import axios from 'axios';

export const fetchData = () =>
  axios.get('https://data.covid19.go.id/public/api/prov_time.json');
export const dataLab = () =>
  axios.get('https://data.covid19.go.id/public/api/lab.json');
export const dataCovidGlobal = () =>
  axios.get('https://covid19.mathdro.id/api/confirmed');
export const dailyCovidUpdate = (params) =>
  axios.get(`https://covid19.mathdro.id/api/daily/${params}`);
