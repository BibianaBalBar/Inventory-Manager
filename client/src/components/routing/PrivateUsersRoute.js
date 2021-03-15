import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { loading, user } = authContext;
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

export default PrivateAdminRoute;