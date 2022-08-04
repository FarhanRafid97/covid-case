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
      text: 'South east Asia Covid 19 Death',
    },
  },
};

const SeaCartDeath = () => {
  const dispatch = useDispatch();
  const dailyCovid19 = useSelector((state) => state.dailyCovid);

  const labels = dailyCovid19.map((data) => data.countryRegion);
  const dataTest = dailyCovid19.sort(
    (a, b) => Number(a.deaths) - Number(b.deaths)
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Deaths',
        data: dataTest.map((data) => data.deaths).reverse(),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
