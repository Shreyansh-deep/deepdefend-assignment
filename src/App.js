import { Route, Routes } from 'react-router-dom';

import { AppRoutes } from './constants/routes';

import Dashboard from './pages/dashboard/dashboard.component';
import SideNavbar from './components/layout/side-nav-bar/side-navbar.component';

import { AppWrapper, CenterContent, LeftDrawer } from 'App.styles';

function App() {
  return (
    <AppWrapper>
    <LeftDrawer>
      <SideNavbar />
    </LeftDrawer>

    <CenterContent>
      <Routes>
        <Route path={AppRoutes.dashboard.path} element={<Dashboard />} />
      </Routes>
    </CenterContent>
  </AppWrapper>
  );
}

export default App;
