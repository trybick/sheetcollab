import { Route } from 'react-router-dom';
import HomePage from 'components/homepage/HomePage';
import LoginPage from 'components/login/LoginPage';
import AddSheetPage from 'components/addSheetsPage/AddSheetPage';
import MyProfilePage from 'components/myProfile/MyProfilePage';
import SearchPage from 'components/searchPage/SearchPage';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADD_SHEET: '/addSheet',
  MY_PROFILE: '/myProfile',
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
];

export const mappedRoutes = routeMap.map(({ path, component }, key) => (
  <Route path={path} component={component} key={key} exact />
));
