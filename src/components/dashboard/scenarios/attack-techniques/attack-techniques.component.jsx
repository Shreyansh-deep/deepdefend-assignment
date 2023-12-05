import { Box, Card, Typography, Button, useTheme } from '@mui/material';
import HealingIcon  from '@mui/icons-material/HealingOutlined';

import data from './data.json';

import LevelIndicator from 'components/shared/level-indicator/level-indicator.component';

import { Column, Row } from 'components/shared/shared.styles';

const AttackTechniques = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: '100%' }}>
      <Row justifyContent='flex-start'>
        <Typography>Top impacting attack techniques</Typography>
        <Button sx={{ textTransform: 'capitalize' }} variant='small'>
          View All
        </Button>
      </Row>
      <Row justifyContent='space-between'>
        {data.map((technique) => (
          <Card sx={{ p: 2, overflow: 'hidden' }}>
            <Typography
              gutterBottom
              noWrap
              textOverflow='ellipsis'
              fontWeight={600}
            >
              {technique.label}
            </Typography>
            <Row
              justifyContent='flex-start'
              sx={{ fontSize: 12, columnGap: 1 }}
            >
              Complexity:
              <LevelIndicator level={technique.complexity} />
            </Row>
            <Row
              justifyContent='flex-start'
              sx={{ fontSize: 12, columnGap: 1, mb: 2 }}
            >
              Severity:
              <LevelIndicator level={technique.severity} />
            </Row>
            <Row
              justifyContent='space-evenly'
              sx={{ columnGap: 2, marginBottom: '10px', mb: 3 }}
            >
              <Column sx={{ textAlign: 'center' }}>
                <Typography variant='h5' fontWeight={700}>
                  {technique.affected_entities}
                </Typography>
                <Typography fontSize={12}>Affected Entities</Typography>
              </Column>
              <Column
                sx={{ textAlign: 'center', color: theme.palette.error.dark }}
              >
                <Typography variant='h5' fontWeight={700}>
                  {technique.percent_assets_at_risk}
                </Typography>
                <Typography fontSize={12}>Percent assets at risk</Typography>
              </Column>
            </Row>
            <Row>
              <Button
                sx={{ textTransform: 'capitalize', color: 'white' }}
                fontSize={12}
                textAlign='center'
                startIcon={<HealingIcon />}
              >
                View remeditions
              </Button>
            </Row>
          </Card>
        ))}
      </Row>
    </Box>
  );
};

export default AttackTechniques;
