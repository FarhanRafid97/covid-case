import { Box, Flex, Spinner, useColorModeValue } from '@chakra-ui/react';
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
import { weeklyIndonesiaCase } from '../../actions/ActionIndoneWeekly';

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

const IndonesiaWeekly = () => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const dispatach = useDispatch();

  const weeklyData = useSelector((state) => state.IndonesiaWeekly);

  const labels = weeklyData.map((data, index) => data.lastUpdate);
  const data = {
    labels,
    datasets: [
      {
        position: 'left',
        label: 'Confirmed',

        data: weeklyData.map((data) => Number(data.confirmed)),
        backgroundColor: 'rgba(66, 165, 245,0.35)',
      },
    ],
  };
  console.log(labels);
  useEffect(() => {
    dispatach(weeklyIndonesiaCase());
  }, [dispatach]);
  return (
    <Flex
      minW="100vw"
      minH="100vh"
      justifyContent="center"
      mt="71px"
      paddingTop="25px"
      alignItems="center"
      bg={bgColor}
    >
      {weeklyData.length > 0 ? (
        <Box w="100%" h="100%" fontSize="12px">
          <Bar options={options} data={data} />
        </Box>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </Flex>
  );
};

export default IndonesiaWeekly;
