import { Redirect, Route } from 'react-router';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { ROUTES } from './routeMap';

const PrivateRoute = ({
  component,
  ...rest
}: {
  component: () => JSX.Element;
  exact: true;
  path: string;
}) => {
  const [isLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <Route
      render={() => (isLoggedIn ? component() : <Redirect to={{ pathname: ROUTES.LOGIN }} />)}
      {...rest}
    />
  );
};

export default PrivateRoute;
