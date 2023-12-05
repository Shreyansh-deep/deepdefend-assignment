import { Card, Typography, Button } from '@mui/material';

import ScenarioTile from './scenario-tile/scenario-tile.component';

import { Row } from 'components/shared/shared.styles';

const HighRisk = () => {
  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Row justifyContent='flex-start'>
        <Typography>Scenario at high risk</Typography>
        <Button sx={{ textTransform: 'capitalize' }} variant='small'>
          View All
        </Button>
      </Row>
      <ScenarioTile />
      <ScenarioTile />
      <ScenarioTile />
    </Card>
  );
};

export default HighRisk;
