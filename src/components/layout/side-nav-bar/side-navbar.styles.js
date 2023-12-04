import { styled } from '@mui/material';

export const NavbarWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  transition: width linear 300;
  border-right: 1px solid;
  border-color: #e0e0e0;
`;

export const NavbarHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
