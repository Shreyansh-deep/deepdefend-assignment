import { Box } from '@mui/material';
import ScoreMetric from '../score-metric/score-metric.component';
import ScenarioFitlers from '../scenarios/scenarios-filter.component';

const MetricsGrid = () => {
  return (
    <Box sx={{p: 2}}>
      <ScoreMetric />
      <ScenarioFitlers />
    </Box>
  );
};

export default MetricsGrid;
