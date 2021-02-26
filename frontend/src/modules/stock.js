import { handleActions } from 'redux-actions';
import { createRequestThunk } from './utils/createRequestThunk';
import * as api from './utils/stockApi';

export const GET_STOCK = 'stock/GET_STOCK';
const GET_STOCK_SUCCESS = 'stock/GET_STOCK_SUCCESS';
export const getStockById = createRequestThunk(GET_STOCK, api.getStockById);

// not store related
export const CREATE_STOCK = 'stock/CREATE_STOCK';
export const SAVE_STOCK = 'stock/SAVE_STOCK';
export const DELETE_STOCK = 'stock/DELETE_STOCK';
export const createStock = createRequestThunk(CREATE_STOCK, api.createStock);
export const saveStock = createRequestThunk(SAVE_STOCK, api.saveStock);
export const deleteStock = createRequestThunk(DELETE_STOCK, api.deleteStock);

const initialState = {
  stock: []
};

const reducer = handleActions(
  {
    [GET_STOCK_SUCCESS]: (state, { payload: stock }) => ({
      stock
    })
  },
  initialState
);

export default reducer;
