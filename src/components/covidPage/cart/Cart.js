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
import { Bar, Line, Chart } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { dataCovidDaily } from '../../../actions/DataCovidDaily';

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
  indexAxis: 'y',
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

const Cart = () => {
  const dispatch = useDispatch();
  const dailyCovid19 = useSelector((state) => state.dailyCovid);

  const labels = dailyCovid19.map((data) => data.countryRegion);

  const data = {
    labels,
    datasets: [
      {
        position: 'left',
        label: 'Confirmed',

        data: dailyCovid19.map((data) => data.confirmed),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  useEffect(() => {
    dispatch(dataCovidDaily());
  }, [dispatch]);

  return (
    <Box>
      <Bar type="line" options={options} data={data} />;
    </Box>
  );
};
export default Cart;
