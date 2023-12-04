import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import hexToRgba from 'hex-to-rgba';

export const NavLinkWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 25px;
  padding: 0 15px;
  height: 45px;

  &.active {
    background-color: ${({ theme }) =>
      hexToRgba(theme.palette.primary.main, 0.1)};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
