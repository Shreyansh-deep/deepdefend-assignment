import { Typography } from '@mui/material';
import { ScoreCardWrapper } from './score-metric.styles';
import { Row } from 'components/shared/shared.styles';
import LineChart from './line-chart/line-chart.component';

const ScoreMetric = () => {
  return (
    <ScoreCardWrapper>
      <Row sx={{ height: '100%', aspectRatio: 1, bgcolor: '#30303D' }}>
        <Typography fontWeight='bold' color='white'>
          70
        </Typography>
      </Row>
      <LineChart />
    </ScoreCardWrapper>
  );
};

export default ScoreMetric;
