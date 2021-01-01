import React, { useReducer, userReducer } from 'react';
import uuid from 'uuid';
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
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Item

  //Delete Item

  //Set Current Item

  //Clear Current Item

  //Update Item

  //Filter Items

  //Clear Filter

  return (
    <ItemContext.Provider
      value={{
        items: state.items
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;