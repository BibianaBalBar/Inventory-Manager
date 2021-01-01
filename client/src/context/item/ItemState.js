import React, { userReducer } from 'react';
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