import React, { Fragment, useContext } from 'react';
import ItemComponent from './ItemComponent';
import ItemContext from '../../context/item/itemContext';


const Items = () => {
  const itemContext = useContext(ItemContext);

  const { items, filtered } = itemContext;

  if(items.length === 0) {
    return <h4>Please add items to your inventory</h4>
  }

  return (
    <Fragment>
      {filtered !== null 
        ? filtered.map(item => (
            <ItemComponent key={item.id} item={item} />
          )) 
        : items.map(item => (
            <ItemComponent key={item.id} item={item} />
          ))}
    </Fragment>
  )
};

export default Items;
