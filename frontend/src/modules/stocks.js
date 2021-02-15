import { createAction, handleActions } from 'redux-actions';
import { createRequestThunk } from './utils/createRequestThunk';
import * as api from './utils/stocksApi';

export const GET_STOCKS = 'stocks/GET_STOCKS';
const GET_STOCKS_SUCCESS = 'stocks/GET_STOCKS_SUCCESS';
const STACK_STOCKS = 'stocks/STACK_STOCKS';

export const getStocks = createRequestThunk(GET_STOCKS, api.getStocks);
export const stackNewStocks = createAction(STACK_STOCKS, (stock) => stock);

const initialState = {
  data: []
};

const reducer = handleActions(
  {
    [GET_STOCKS_SUCCESS]: (state, { payload: stocks }) => ({
      data: stocks
    }),
    [STACK_STOCKS]: (state, { payload }) => ({
      ...state,
      data: [payload, ...state.data]
    })
  },
  initialState
);

export default reducer;
