import { Box } from '@chakra-ui/react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
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
      text: 'Top 100 Global Covid Sort By Deaths',
    },
  },
};

const CartGlobalDeath = () => {
  const dispatch = useDispatch();
  const dataGlobal = useSelector((state) => state.covidGlobal);

  const labels = dataGlobal.map((data, index) => data.countryRegion);

  const dataTst = dataGlobal.sort((a, b) => a.deaths - b.deaths);

  const data = {
    labels,
    datasets: [
      {
        label: 'Deaths',
        data: dataTst.map((data) => data.deaths).reverse(),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
