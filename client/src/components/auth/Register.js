import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors } = authContext;

  useEffect(() => {    
    if(error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || password === '') {
      setAlert('Please enter all fields.', 'danger');
    } else if(password !== password2) {
      setAlert('Passwords do nor match.', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
    setUser({
      name: '',
      email: '',
      password: '',
      password2: '',
    })    
  };

  

  return (
    <div className="card-createUser">
      <h1>
        Create <span className="text-success">New User</span>
      </h1>
      <form  onSubmit={onSubmit} >
        <div className="grid">
        <div className="form-create">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={onChange} required/>
        </div>
        <div className="form-create">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={onChange} required/>
        </div>
        <div className="form-create">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={password} onChange={onChange} minLength="6" required/>
        </div>
        <div className="form-create">
          <label htmlFor="password2">Confirm Password:</label>
          <input type="password" name="password2" value={password2} onChange={onChange} minLength="6" required/>
        </div>
        </div>
        <input type="submit" value="Register" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
};

export default Register;
