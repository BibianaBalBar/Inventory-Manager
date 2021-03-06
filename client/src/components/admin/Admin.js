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
        <Link to='/'>Home</Link>
      </li>   
      <li>
        <Link to='/users'>Users</Link>
      </li>               
    </ul>
  );

  return <>{user !== null && user.isAdmin ? adminLinks : null}</>;
};

export default Admin;
