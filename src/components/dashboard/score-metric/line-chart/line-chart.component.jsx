import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import SetttingsIcon from '@mui/icons-material/SettingsOutlined';
import { Box, Typography } from '@mui/material';

import data from './data.json';

import { Column, Row } from 'components/shared/shared.styles';
import { chartColors } from 'constants/colors';

const Legend = ({ label, color }) => (
  <Row sx={{ columnGap: 1 }} justifyContent >
    <Box sx={{ bgcolor: color, width: 6, aspectRatio: 1 }} />
    <Typography fontSize='12px'>{label}</Typography>
  </Row>
);

const LineChart = () => {
  useEffect(() => {
    const chart = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: {...data, datasets: data.datasets.map((dataset, i) => ({...dataset, borderColor: chartColors[i] }))},
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Row sx={{ flexGrow: 1, height: '100%', columnGap: 2 }}>
      <Column sx={{ height: '100%' }} alignItems='flex-start' justifyContent='space-between' >
        <div>
          {data.datasets.map(({ label }, index) => (
            <Legend label={label} color={chartColors[index]} />
          ))}
        </div>
        <Row sx={{ columnGap: 1 }} >
          <SetttingsIcon fontSize='small' /> <Typography fontSize={12} >Configure</Typography>
        </Row>
      </Column>

      <Box sx={{ flexGrow: 1, maxHeight: '100%' }}>
        <canvas id='chart' />
      </Box>
    </Row>
  );
};

export default LineChart;
