import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { dataCovidGlobal } from '../../../actions/DataCovid.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'South east Asia Covid 19 case',
    },
  },
};

const CartGlobalDeath = () => {
  const dispatch = useDispatch();
  const dataGlobal = useSelector((state) => state.covidGlobal);

  const labels = dataGlobal.map((data, index) => data.countryRegion);

  const dataTst = dataGlobal.sort((a, b) => a.deaths - b.deaths);
  console.log(dataTst);
  const data = {
    labels,
    datasets: [
      {
        label: 'Deaths',
        data: dataTst.map((data) => data.deaths).reverse(),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  useEffect(() => {
    dispatch(dataCovidGlobal());
  }, [dispatch]);

  return (
    <Box>
      <Bar options={options} data={data} />;
    </Box>
  );
};
export default CartGlobalDeath;
