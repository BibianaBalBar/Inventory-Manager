import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import UserComponent from './UserComponent';

const Users = () => {
  const [ users, setUsers] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);  

  useEffect(() => {
    const fetchResults = async () => {
      const results = await axios.get('/api/users');
      setUsers(results.data);
      setIsLoading(false);
    }
    fetchResults();
    // eslint-disable-next-line
  }, [users]);

  
  
  
  if(users !== null && users.length === 0 && !isLoading) {
    return <h4>No users found. Register new users.</h4>;
  }

  

  return (
    <Fragment>
      {users !== null && !isLoading ? (
        <TransitionGroup>
          {users.map(user => (
              <CSSTransition key={user._id} timeout={500} classNames="fade">
                <UserComponent  user={user} users={users} setUsers={setUsers}/>
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : <Spinner />}      
    </Fragment>
  )
};

export default Users;