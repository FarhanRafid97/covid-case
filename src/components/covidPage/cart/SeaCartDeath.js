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
      text: 'South east Asia Covid 19 Death',
    },
  },
};

const SeaCartDeath = () => {
  const dispatch = useDispatch();
  const dailyCovid19 = useSelector((state) => state.dailyCovid);

  const labels = dailyCovid19.map((data) => data.countryRegion);

  const data = {
    labels,
    datasets: [
      {
        label: 'Deaths',
        data: dailyCovid19.map((data, data2) => data.deaths),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  useEffect(() => {
    dispatch(dataCovidDaily());
  }, [dispatch]);

  return (
    <Box mt={25}>
      <Bar options={options} data={data} />;
    </Box>
  );
};
export default SeaCartDeath;
