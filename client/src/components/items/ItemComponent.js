import React from 'react';
import PropTypes from 'prop-types';

const ItemComponent = ({ item }) => {
  const { id, name, description, code, quantity, type } = item;

  return (
    <div className="card">
      <h3 className="text-primary text-left">
        {name}{' '} 
        <span 
          style={{ float: 'right' }}
          className={`badge ${(type === 'own' ? 'badge-success' : 'badge-primary')}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {description && (
          <li>
            <i className="far fa-file-alt"></i> {description}
          </li>
        )}        
        <li>
          <i className="fa fa-qrcode"></i> {code}
        </li>
        {quantity && (
          <li>
            <i className="fa fa-sort-amount-up-alt"></i> {quantity}
          </li>
        )}        
      </ul>
      <button className="btn btn-dark btn-sm">Update</button>
      <button className="btn btn-danger btn-sm">Delete</button>
    </div>
  )
};

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired
}

export default ItemComponent;
