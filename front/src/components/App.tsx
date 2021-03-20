import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { mappedRoutes } from 'helpers/routes/routeMap';
import Layout from 'components/core/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>{mappedRoutes}</Switch>
      </Layout>
    </Router>
  );
}

export default App;
