import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/core/Layout';
import Homepage from 'components/homepage/HomePage';
import LoginPage from 'components/login/LoginPage';
import AddSheetPage from 'components/addSheetsPage/AddSheetPage';
import MyProfilePage from 'components/myProfile/MyProfilePage';
import SearchPage from 'components/searchPage/SearchPage';

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
    <Route path="/my-profile">
      <MyProfilePage />
    </Route>
    <Route path="/search/:query">
      <SearchPage />
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
