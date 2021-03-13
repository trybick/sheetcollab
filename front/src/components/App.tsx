import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'src/components/Layout';
import Homepage from 'src/components/Homepage';
import LoginPage from 'src/components/login/LoginPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
