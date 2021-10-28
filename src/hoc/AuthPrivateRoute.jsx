import React from 'react';
import { Redirect } from 'react-router';
import { authToken } from '../common/helpers/token.helper';
import { Route } from 'react-router-dom';

export const AuthPrivateRoute = ({ component: Component, ...rest }) => {
  const includePath = rest.location.pathname.includes('/auth/confirmRegister/');
  return (
    <Route {...rest} render={(props) => (authToken.getToken() && !includePath ? <Redirect to="/profile" /> : <Component {...props} />)} />
  );
};
