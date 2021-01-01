import React, { Fragment, useContext } from 'react';
import ItemComponent from './ItemComponent';
import ItemContext from '../../context/item/itemContext';


const Items = () => {
  const itemContext = useContext(ItemContext);

  const { items } = itemContext;

  return (
    <Fragment>
      {items.map(item => <ItemComponent key={item.id} item={item} />)}
    </Fragment>
  )
};

export default Items;
