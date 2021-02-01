import { createAction, handleActions } from 'redux-actions';
import { createRequestThunk } from './utils/createRequestThunk';
import * as api from './utils/stocksApi';

export const GET_STOCKS = 'stocks/GET_STOCKS';
const GET_STOCKS_SUCCESS = 'stocks/GET_STOCKS_SUCCESS';

export const getStocks = createRequestThunk(GET_STOCKS, api.getStocks);

const initialState = {
  data: []
};

const reducer = handleActions(
  {
    [GET_STOCKS_SUCCESS]: (state, { payload: stocks }) => ({
      data: stocks
    })
  },
  initialState
);

export default reducer;
