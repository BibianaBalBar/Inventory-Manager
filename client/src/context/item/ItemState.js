import React, { useReducer, userReducer } from 'react';
import {v4 as uuid} from 'uuid';
import ItemContext from './itemContext';
import itemReducer from './itemReducer';
import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  FILTER_ITEMS,
  CLEAR_FILTER
} from '../types';

const ItemState = props => {
  const initialState = {
    items: [
      {
        id: 1,
        name: 'box5',
        description: 'medium size yellow box',
        code: '0047',
        quantity: 25,
        type: 'storage'
      },
      {
        id: 2,
        name: 'box6',
        description: 'small size blue box',
        code: '0045',
        quantity: 35,
        type: 'storage'
      },
      {
        id: 3,
        name: 'box7',
        description: 'big size green box',
        code: '0043',
        quantity: 20,
        type: 'storage'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  //Add Item
  const addItem = item => {
    item.id = uuid();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  //Delete Item
  const deleteItem = id => {    
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  //Set Current Item
  const setCurrent = item => {    
    dispatch({ type: SET_CURRENT, payload: item });
  };

  //Clear Current Item
  const clearCurrent = () => {    
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update Item
  const updateItem = item => {    
    dispatch({ type: UPDATE_ITEM, payload: item });
  };

  //Filter Items
  const filterItems = text => {    
    dispatch({ type: FILTER_ITEMS, payload: text });
  };

  //Clear Filter
  const clearFilter = () => {    
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        current: state.current,
        addItem,
        deleteItem,
        setCurrent,
        clearCurrent,
        updateItem,
        filterItems,
        clearFilter
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;