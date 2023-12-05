import { styled } from '@mui/material';
import { Row } from 'components/shared/shared.styles';

export const CardWrapper = styled(Row)`
  column-gap: 10px;
  justify-content: space-between;
  height: 50px;
  padding-right: 10px;
`;

export const Badge = styled('div')`
  width: 20px;
  height: 40px;
  background: red;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -11.8675px;
    width: 0;
    height: 0;
    border-bottom: 20px solid transparent;
    border-top: 20px solid transparent;
    border-left: 12px solid red;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -11.8675px;
    width: 0;
    height: 0;
    border-bottom: 20px solid transparent;
    border-top: 20px solid transparent;
    border-right: 12px solid red;
  }
`;
