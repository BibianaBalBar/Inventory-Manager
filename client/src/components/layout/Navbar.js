import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ItemContext from '../../context/item/itemContext';
import Admin from '../admin/Admin';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const itemContext = useContext(ItemContext);

  const { logout, isAuthenticated, user } = authContext;
  const { clearItems } = itemContext;

  console.log(user)

  const onLogout = () => {
    logout();
    clearItems();
  };

  const authLinks = (
    <Fragment>      
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>        
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );


  return (
    <div className="navbar">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
      <li className="p-right">
        <Link to='#'>Hello { user && user.name }</Link>        
      </li>
      </ul>      
      {isAuthenticated ? <Admin/> : null}
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
        
    </div>
  )
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Inventory Manager',
  icon: 'fas fa-boxes'
};

export default Navbar;
