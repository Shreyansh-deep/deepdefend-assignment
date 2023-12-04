import { Typography } from '@mui/material';
import { NavLinkWrapper } from './nav-link.styles';

const NavLink = ({ icon, label, withoutLabel, ...linkProps }) => {
  return (
    <NavLinkWrapper
      className={({ isActive }) => (isActive ? 'active' : '')}
      {...linkProps}
    >
      {icon}
      {!withoutLabel && (
        <Typography textTransform='capitalize'>{label}</Typography>
      )}
    </NavLinkWrapper>
  );
};

export default NavLink;
