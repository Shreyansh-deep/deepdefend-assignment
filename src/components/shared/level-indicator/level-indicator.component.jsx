import { Box, Typography, useTheme } from '@mui/material';
import { useCallback } from 'react';

import { Row } from '../shared.styles';

const LevelIndicator = ({ level }) => {
  const theme = useTheme();

  const getLevelColors = useCallback((level) => {
    switch (level) {
      case 1:
      case 3:
        return theme.palette.error.dark;
      case 2:
        return theme.palette.warning.dark;
      default:
        return 'grey';
    }
  }, []);

  const getLevelText = useCallback((level) => {
    if (level <= 1) return 'Low';
    if (level <= 2) return 'Medium';
    if (level <= 3) return 'High';
    return 'Critical';
  }, []);

  return (
    <Row sx={{ columnGap: 1 }}>
      <Row sx={{ columnGap: '2px' }}>
        {Array(3)
          .fill('')
          .map((_, i) => (
            <Box
              sx={{
                bgcolor: getLevelColors(i < level ? level : 0),
                width: 3,
                borderRadius: 1,
                height: 10,
              }}
            />
          ))}
      </Row>
      <Typography fontSize={12} sx={{ color: getLevelColors(level) }}>
        {getLevelText(level)}
      </Typography>
    </Row>
  );
};

export default LevelIndicator;
