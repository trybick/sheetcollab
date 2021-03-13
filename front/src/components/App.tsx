import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'src/components/Layout';
import Homepage from 'src/components/Homepage';
import LoginPage from 'src/components/login/LoginPage';

const routes = (
  <>
    <Route path="/" exact>
      <Homepage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Switch>{routes}</Switch>
      </Layout>
    </Router>
  );
}

export default App;
