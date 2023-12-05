import { Typography, Card } from '@mui/material';
import { ScoreCardWrapper } from './score-metric.styles';
import { Row } from 'components/shared/shared.styles';
import LineChart from './line-chart/line-chart.component';
import { cardGrey } from 'constants/colors';

const ScoreMetric = () => {
  return (
    <Card>
      <ScoreCardWrapper>
          <Row sx={{ height: '100%', aspectRatio: 1, bgcolor: cardGrey }}>
            <Typography fontWeight='bold' color='white'>
              70
            </Typography>
          </Row>
        <LineChart />
      </ScoreCardWrapper>
    </Card>
  );
};

export default ScoreMetric;
