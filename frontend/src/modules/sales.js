import { createAction, handleActions } from 'redux-actions';
import { createRequestThunk } from './utils/createRequestThunk';
import * as api from './utils/salesApi';

export const GET_SALES = 'sales/GET_SALES';
const GET_SALES_SUCCESS = 'sales/GET_SALES_SUCCESS';
export const getSales = createRequestThunk(GET_SALES, api.getSales);

const initialState = {
  sales: [],
  count: 0
};

const reducer = handleActions(
  {
    [GET_SALES_SUCCESS]: (state, { payload: { sales, count } }) => ({
      sales,
      count
    })
  },
  initialState
);

export default reducer;
