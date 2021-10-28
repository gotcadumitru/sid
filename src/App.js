import { Route, Switch } from 'react-router';
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { BrowserRouter, Link } from 'react-router-dom';
import { PrivateRoute } from './hoc/PrivateRoute';
import { AuthPrivateRoute } from './hoc/AuthPrivateRoute';
import './style/main.scss';
import FirstAnim from './animations/FirstAnim';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Link to="/first">Fisr</Link>
      </div>
      <Switch>
        <PrivateRoute path="/profile" component={ProfilePage} />
        <AuthPrivateRoute path="/auth" component={AuthPage} />
        <Route path="/first">
          <FirstAnim />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
