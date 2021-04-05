import React  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const UserComponent = ({ user, users, setUsers }) => {
  const { _id, name, email } = user;
  
  const onDelete = async () => {
    const thisUser = await axios.delete(`/api/users/${_id}`);
    setUsers(users.filter((state) => state._id !== thisUser._id));    
  }


  return (
    <div className="card-user">
      <div className="card-user-info">
        <h3 className="text-primary text-left">
          {name}{' '}         
        </h3>
        <h4 className="text-primary text-left"> 
          {email}{' '}   
        </h4>
      </div>  
      
      <div className="btn-side">
        <button className="btn-delete btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </div>
      
    </div>
  )
};

UserComponent.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserComponent;