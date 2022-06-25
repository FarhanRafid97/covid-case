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

const CartGlobal = () => {
  const dispatch = useDispatch();
  const dataGlobal = useSelector((state) => state.covidGlobal);

  const labels = dataGlobal.map((data, index) => data.countryRegion);

  //   console.log(labels);

  const data = {
    labels,
    datasets: [
      {
        label: 'Confirmed',
        data: dataGlobal.map((data) => data.confirmed),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
