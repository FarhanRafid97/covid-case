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
        backgroundColor: 'rgba(66, 165, 245,0.35)',
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
