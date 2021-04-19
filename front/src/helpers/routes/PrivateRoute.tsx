import { Redirect, Route } from 'react-router';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { ROUTES } from './routeMap';
import React from 'react';

const PrivateRoute = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  exact: true;
  path: string;
}) => {
  const [isLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <Route
      render={() => (isLoggedIn ? children : <Redirect to={{ pathname: ROUTES.LOGIN }} />)}
      {...rest}
    />
  );
};

export default PrivateRoute;
