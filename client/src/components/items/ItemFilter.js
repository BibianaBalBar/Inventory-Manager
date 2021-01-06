import React, { useContext, useRef, useEffect } from 'react';
import ItemContext from '../../context/item/itemContext';

const ItemFilter = () => {
  const itemContext = useContext(ItemContext);
  const text = useRef();

  const { filterItems, clearFilter, filtered } = itemContext;

  useEffect(() => {
    if(filtered === null) {
      text.current.value = '';
    }
  })

  const onChange = (e) => {
    if(text.current.value !== '') {
      filterItems(e.target.value);
    } else {
      clearFilter();
    }
  }

  return (
    <form>
      <input type="text" ref={text} placeholder="Filter Products" onChange={onChange}/>
    </form>
  )
};

export default ItemFilter;
