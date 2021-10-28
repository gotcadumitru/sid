import React, { useEffect } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router';
import ForgotPassword from '../../components/auth/ForgotPassword/ForgotPassword';
import Login from '../../components/auth/Login/Login';
import Register from '../../components/auth/Register/Register';
import ResetPassword from '../../components/auth/ResetPassword/ResetPassword';
import ConfirmRegistration from '../../components/auth/ConfirmRegistration/ConfirmRegistration';
import { useSelector } from 'react-redux';
import { FetchStatus } from '../../common/state/redux/reducer/user.reducer';

const AuthPage = (props) => {
  const match = useRouteMatch();
  const userFetchStatus = useSelector((state) => state.profileInfo.user.fetchStatus);
  const history = useHistory();
  useEffect(() => {
    if (userFetchStatus === FetchStatus.SUCCESS) {
      history.push('/profile');
    }
    // eslint-disable-next-line
  }, [userFetchStatus]);
  return (
    <div className="auth">
      <div className="auth__container">
        <Route exact path={`${match.url}/login`}>
          <Login />
        </Route>
        <Route exact path={`${match.url}/register`}>
          <Register />
        </Route>
        <Route exact path={`${match.url}/forgotpassword`}>
          <ForgotPassword />
        </Route>
        <Route exact path={`${match.url}/resetpassword/:resetToken`}>
          <ResetPassword />
        </Route>
        <Route exact path={`${match.url}/confirmRegister/:confirmRegisterToken`}>
          <ConfirmRegistration />
        </Route>
      </div>
    </div>
  );
};
export default AuthPage;
