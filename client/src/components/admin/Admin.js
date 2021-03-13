import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";

const Admin = () => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;
  console.log(user)

  const adminLinks = (
    <ul>
      <li>
        <Link to='/about'>Users</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </ul>
  );

  return <>{user !== null && user.isAdmin ? adminLinks : null}</>;
};

export default Admin;
