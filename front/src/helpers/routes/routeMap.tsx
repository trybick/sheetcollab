import { Route } from 'react-router-dom';
import HomePage from 'components/homepage/HomePage';
import LoginPage from 'components/login/LoginPage';
import AddSheetPage from 'components/addSheetsPage/AddSheetPage';
import MyProfilePage from 'components/myProfile/MyProfilePage';
import SearchPage from 'components/searchPage/SearchPage';

const routeMap = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/add-sheet',
    component: AddSheetPage,
  },
  {
    path: '/my-profile',
    component: MyProfilePage,
  },
  {
    path: '/search/:query',
    component: SearchPage,
  },
];

export const mappedRoutes = routeMap.map(({ path, component }, key) => (
  <Route path={path} component={component} key={key} exact />
));
