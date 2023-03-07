import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
      if (isLoggedIn) {
        return <Component {...props} />
      } else {
        //return <Redirect to={{ pathname: 'http://localhost:3001/login' }} />
      }
    }} />
  )
}

export default ProtectedRoute;
