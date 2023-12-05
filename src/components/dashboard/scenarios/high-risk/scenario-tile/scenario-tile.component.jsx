import { useEffect, useRef } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { Chart } from 'chart.js/auto';
import hexToRgba from 'hex-to-rgba';

import data from './data.json';

import { Badge, CardWrapper } from './scenario-tile.styles';
import { Row } from 'components/shared/shared.styles';

const ScenarioTile = () => {
  const canvasRef = useRef();
  const theme = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        ...data,
        datasets: data.datasets.map((dataset, i) => ({
          ...dataset,
          borderColor: theme.palette.primary.main,
          backgroundColor: hexToRgba(theme.palette.primary.main, 0.4),
          fill: 'start',
          tension: 0.4,
        })),
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          point: { radius: 0 },
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
          },
        },
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
    <CardWrapper>
      <Row>
        <Badge />
        <Typography
          sx={{
            maxWidth: 320,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >{`(22)-On-Prem Risk | Workstations > DC`}</Typography>
      </Row>

      <Box sx={{ minWidth: 120, maxWidth: 120, width: 120, height: '100%' }}>
        <canvas ref={canvasRef} />
      </Box>

      <Button size='small' color='inherit' variant='outlined'>
        Take Action
      </Button>
    </CardWrapper>
  );
};

export default ScenarioTile;
