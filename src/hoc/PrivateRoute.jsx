import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { authToken } from '../common/helpers/token.helper';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchStatus } from '../common/state/redux/reducer/user.reducer';
import { fetchAuthUserThunk } from '../common/state/redux/thunk/user.thunk';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userFetchStatus = useSelector((state) => state.profileInfo.user.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthUserThunk());
    // eslint-disable-next-line
  }, []);
  if (!authToken.getToken() || userFetchStatus === FetchStatus.FAIL) {
    authToken.removeToken();
    return <Redirect to="/auth/register" />;
  }

  if (userFetchStatus !== FetchStatus.SUCCESS) {
    return <div className="empty-page" />;
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
