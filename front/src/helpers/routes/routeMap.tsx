import { Redirect, Route } from 'react-router-dom';
import HomePage from 'components/HomePage/HomePage';
import LoginPage from 'components/LoginPage/LoginPage';
import AddSheetPage from 'components/AddSheetPage/AddSheetPage';
import MyProfilePage from 'components/MyProfilePage/MyProfilePage';
import SearchPage from 'components/SearchPage/SearchPage';
import MessagesPage from 'components/MessagesPage/MessagesPage';
import PrivateRoute from './PrivateRoute';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADD_SHEET: '/add',
  MY_PROFILE: '/profile',
  SEARCH: '/search',
  MESSAGES: '/messages',
} as const;

const routeMap = [
  // *
  // * Public
  // *
  {
    path: ROUTES.HOME,
    component: <HomePage />,
    isPrivate: false,
  },
  {
    path: ROUTES.LOGIN,
    component: <LoginPage />,
    isPrivate: false,
  },
  {
    path: ROUTES.SEARCH,
    component: <Redirect to={ROUTES.HOME} />,
    isPrivate: false,
  },
  {
    path: `${ROUTES.SEARCH}/:query`,
    component: <SearchPage />,
    isPrivate: false,
  },
  // *
  // * Private
  // *
  {
    path: ROUTES.ADD_SHEET,
    component: <AddSheetPage />,
    isPrivate: true,
  },
  {
    path: ROUTES.MY_PROFILE,
    component: <MyProfilePage />,
    isPrivate: true,
  },
  {
    path: ROUTES.MESSAGES,
    component: <MessagesPage />,
    isPrivate: true,
  },
] as const;

export const mappedRoutes = routeMap.map(({ component, isPrivate, path }, key) =>
  isPrivate ? (
    <PrivateRoute key={key} path={path} exact>
      {component}
    </PrivateRoute>
  ) : (
    <Route key={key} path={path} exact>
      {component}
    </Route>
  )
);
