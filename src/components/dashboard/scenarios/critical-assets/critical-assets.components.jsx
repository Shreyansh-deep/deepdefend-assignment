import {
  Card,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
} from '@mui/material';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

import data from './data.json';

import { Row } from 'components/shared/shared.styles';

const createData = (name, calories, fat, carbs, protein) => ({
  name,
  calories,
  fat,
  carbs,
  protein,
});

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CriticalAssets = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: 'doughnut',
      data: {
        ...data,
        datasets: data.datasets.map((dataset) => ({
          ...dataset,
          borderWidth: 0
        })),
      },
      options: {
        cutout: 52,
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
    <Card sx={{ p: 3, height: '100%' }}>
      <Row justifyContent='flex-start' sx={{mb: 1}}>
        <Typography>Critical assets at risk</Typography>
        <Button sx={{ textTransform: 'capitalize' }} variant='small'>
          View All
        </Button>
      </Row>

      <Typography fontSize={12}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Row>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Dessert</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ width: 120, height: 120 }}>
          <canvas ref={canvasRef} />
        </Box>
      </Row>
    </Card>
  );
};

export default CriticalAssets;
