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
      text: 'Top 100 Global Covid Sort By Confirmed',
    },
  },
};

const CartGlobal = () => {
  const dispatch = useDispatch();
  const dataGlobal = useSelector((state) => state.covidGlobal);

  const labels = dataGlobal.map((data, index) => data.countryRegion);

  const data = {
    labels,
    datasets: [
      {
        label: 'Confirmed',
        data: dataGlobal.map((data) => data.confirmed),
        backgroundColor: 'rgba(66, 165, 245,0.35)',
      },
    ],
  };
  useEffect(() => {
    dispatch(dataCovidGlobal('casehHighToLow'));
  }, [dispatch]);

  return (
    <Box>
      <Bar options={options} data={data} />;
    </Box>
  );
};
export default CartGlobal;
