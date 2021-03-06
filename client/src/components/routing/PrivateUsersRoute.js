import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateUsersRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { loading, user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Route 
      {...rest} 
      render={props => 
        user !== null && user.isAdmin && !loading ? (
          <Component {...props} />
        ) : (
          <Redirect to='/users' />
        )
      } 
    />
  );
  
};

export default PrivateUsersRoute;