import SpeedIcon from '@mui/icons-material/SpeedOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import PolylineIcon from '@mui/icons-material/PolylineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/ManageSearchOutlined';

export const AppRoutes = {
  dashboard: {
    path: '/abc',
    icon: <SpeedIcon color='inherit' />,
    title: 'abc',
  },
  analytics: {
    path: '/def',
    icon: <DragIndicatorIcon sx={{ transform: 'rotateZ(90deg)' }} color='inherit' />,
    title: 'def',
  },
  voters: {
    path: '/ghi',
    icon: <ArticleIcon color='inherit' />,
    title: 'ghi',
  },
  elections: {
    path: '/jkl',
    icon: <PolylineIcon color='inherit' />,
    title: 'bkl',
  },
  districts: {
    path: '/dsbk',
    icon: <SettingsIcon color='inherit' />,
    title: 'dsbk',
  },
  reports: {
    path: '/acdcmc',
    icon: <SearchIcon color='inherit' />,
    title: 'acdcmc',
  },
};
