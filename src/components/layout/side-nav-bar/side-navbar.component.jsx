import { motion } from 'framer-motion';
import { Typography, IconButton } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';

import { AppRoutes } from 'constants/routes';
import { useCollapse } from 'hooks/use-collapse';

import NavLink from 'components/shared/nav-link/nav-link.component';
import { NavbarHeader, NavbarWrapper } from './side-navbar.styles';
import { Row } from 'components/shared/shared.styles';


const navbarOpenWidth = '280px';
const navbarCollapsedWidth = '54px';

const SideNavbar = () => {
  const [collapsed, toggleCollapse] = useCollapse();

  return (
    <motion.div
      animate={{ width: collapsed ? navbarCollapsedWidth : navbarOpenWidth }}
      style={{
        width: collapsed ? navbarCollapsedWidth : navbarOpenWidth,
        height: '100%',
      }}
    >
      <NavbarWrapper collapsed={collapsed}>
        <div>
          {/* header */}
          <NavbarHeader>
            {!collapsed && (
              <Row>
                <Typography sx={{whiteSpace: 'nowrap'}} fontSize={14}>
                  Something App
                </Typography>
              </Row>
            )}
            <IconButton sx={{ padding: 0 }} onClick={toggleCollapse}>
              {collapsed ? <MenuIcon /> : <MenuOpenIcon />}
            </IconButton>
          </NavbarHeader>
          {/* nav routes */}
          {Object.values(AppRoutes).map((route) => (
            <NavLink
              withoutLabel={collapsed} 
              key={route.path}
              icon={route.icon}
              label={route.title}
              to={route.path}
            />
          ))}
        </div>
      </NavbarWrapper>
    </motion.div>
  );
};

export default SideNavbar;
