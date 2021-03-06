import { combineReducers } from 'redux';
import dataCovid from './dataCovid';
import covidLab from './covidLab';
import covidGlobal from './covidGlobal';
import dailyCovid from './dailyCovid';
import IndonesiaWeekly from './IndonesiaWeekly';

export const reducers = combineReducers({
  dataCovid,
  covidLab,
  covidGlobal,
  dailyCovid,
  IndonesiaWeekly,
});
