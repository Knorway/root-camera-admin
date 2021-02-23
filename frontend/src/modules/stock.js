import { handleActions } from 'redux-actions';
import { createRequestThunk } from './utils/createRequestThunk';
import * as api from './utils/stocksApi';

export const GET_STOCK = 'stock/GET_STOCK';
const GET_STOCK_SUCCESS = 'stock/GET_STOCK_SUCCESS';

export const getStockById = createRequestThunk(GET_STOCK, api.getStockById);

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
