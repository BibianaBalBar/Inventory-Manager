import React, {useEffect}  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const UserComponent = ({ user, users, setUsers }) => {
  
  

  const { _id, name, email } = user;
  
  

  const onDelete = async () => {
    const thisUser = await axios.delete(`/api/users/${_id}`);
    setUsers(users.filter((state) => state._id !== thisUser._id));    
  }

  
  //   //Update user
//   const updateUser = async user => {    
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };

//     try {
//       const res = await axios.put(`/api/users/${user._id}`, user, config);
//       dispatch({ 
//         type: UPDATE_USER, 
//         payload: res.data 
//       });
//     } catch (err) {
//       dispatch({
//         type: USER_ERROR, 
//         payload: err.response.msg 
//       });
//     }        
//   };

//     case UPDATE_USER:
//       return {
//         ...state,
//         users: state.users.map(user => user._id === action.payload._id ? action.payload : user),
//         loading: false
//       };   

  return (
    <div className="card">
      <h3 className="text-primary text-left">
        {name}{' '}         
      </h3>
      <h4 className="text-primary text-left"> 
        {email}{' '}   
      </h4>
      {/* <button className="btn btn-dark btn-sm" onClick={() => setCurrent(user)}>Update</button> */}
      <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
    </div>
  )
};

UserComponent.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserComponent;