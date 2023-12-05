import { useState } from 'react';
import { Grid } from '@mui/material';
import { daysFitler, scenarioFilterOptions } from 'constants/filter-options';

import CustomSelect from 'components/shared/custom-select/custom-select.component';

import { Row } from 'components/shared/shared.styles';
import HighRisk from './high-risk/high-risk.component';

const ScenarioFitlers = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);

  const handleSelectedScenario = (selectedScenario) =>
    setSelectedScenario(selectedScenario === 'all' ? null : selectedScenario);

  return (
    <>
      <Row sx={{ py: 2, columnGap: 2 }} justifyContent='flex-start'>
        <CustomSelect
          size='small'
          options={scenarioFilterOptions}
          onChange={handleSelectedScenario}
        />
        <CustomSelect size='small' options={daysFitler} onChange={() => {}} />
      </Row>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <HighRisk />
        </Grid>
      </Grid>
    </>
  );
};

export default ScenarioFitlers;
