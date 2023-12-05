import { Scenarios } from './scenario.types';

export const scenarioFilterOptions = [
  { value: 'all', label: 'All scenarios' },
  { value: Scenarios.HighRisk, label: 'Scenarios at high risk' },
  { value: Scenarios.CriticalAssets, label: 'Critial assets at risk' },
  { value: Scenarios.ChokePoints, label: 'Top choke points' },
  {
    value: Scenarios.AttackTechniques,
    label: 'Top impacting attack techniques',
  },
];

export const daysFitler = [
  { value: '10', label: 'Past 10 days' },
  { value: '30', label: 'Past 30 days' },
  { value: '60', label: 'Past 60 days' },
];
