import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/core/Layout';
import Homepage from 'components/Homepage/Homepage';
import LoginPage from 'components/login/LoginPage';
import AddSheetPage from 'components/addSheetsPage/AddSheetPage';

const routes = (
  <>
    <Route path="/" exact>
      <Homepage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/add-sheet">
      <AddSheetPage />
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
