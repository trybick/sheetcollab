import { Route } from 'react-router-dom';
import HomePage from 'components/HomePage/HomePage';
import LoginPage from 'components/LoginPage/LoginPage';
import AddSheetPage from 'components/AddSheetPage/AddSheetPage';
import MyProfilePage from 'components/MyProfilePage/MyProfilePage';
import SearchPage from 'components/SearchPage/SearchPage';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADD_SHEET: '/add',
  MY_PROFILE: '/profile',
  SEARCH: '/search',
} as const;

const routeMap = [
  {
    path: ROUTES.HOME,
    component: HomePage,
  },
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
  },
  {
    path: ROUTES.ADD_SHEET,
    component: AddSheetPage,
  },
  {
    path: ROUTES.MY_PROFILE,
    component: MyProfilePage,
  },
  {
    path: `${ROUTES.SEARCH}/:query`,
    component: SearchPage,
  },
] as const;

export const mappedRoutes = routeMap.map(({ path, component }, key) => (
  <Route path={path} component={component} key={key} exact />
));
