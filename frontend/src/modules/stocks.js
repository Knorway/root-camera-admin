import { createAction, handleActions } from 'redux-actions';
import { createRequestThunk } from './utils/createRequestThunk';
import * as api from './utils/stocksApi';

export const GET_STOCKS = 'stocks/GET_STOCKS';
const GET_STOCKS_SUCCESS = 'stocks/GET_STOCKS_SUCCESS';
const STACK_STOCKS = 'stocks/STACK_STOCKS';

export const getStocks = createRequestThunk(GET_STOCKS, api.getStocks);
export const stackNewStocks = createAction(STACK_STOCKS, (stock) => stock);

const initialState = {
  stocks: [],
  count: 0
};

const reducer = handleActions(
  {
    [GET_STOCKS_SUCCESS]: (state, { payload: { stocks, count } }) => ({
      stocks,
      count
    }),
    [STACK_STOCKS]: (state, { payload }) => ({
      ...state,
      stocks: [payload, ...state.stocks]
    })
  },
  initialState
);

export default reducer;
