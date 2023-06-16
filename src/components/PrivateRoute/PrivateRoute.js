import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefresher } from 'redux/auth/authSeletors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresher = useSelector(selectIsRefresher);
  const shoutRedirect = !isLoggedIn && !isRefresher;

  return shoutRedirect ? <Navigate to={redirectTo} /> : Component;
};
