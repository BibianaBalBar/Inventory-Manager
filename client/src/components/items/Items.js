import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup>
      {filtered !== null 
        ? filtered.map(item => (
          <CSSTransition key={item.id} timeout={500} classNames="fade">
            <ItemComponent item={item} />
            </CSSTransition>
          )) 
        : items.map(item => (
          <CSSTransition key={item.id} timeout={500} classNames="fade">
            <ItemComponent item={item} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Fragment>
  )
};

export default Items;
