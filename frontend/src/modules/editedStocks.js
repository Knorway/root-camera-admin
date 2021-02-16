import { createAction, handleActions } from 'redux-actions';

export const createEditedStock = createAction('editedStocks/CREATE');
export const stackEditedStocks = createAction(
  'editedStocks/CHANGE',
  ({ editedStock }) => editedStock,
  ({ stockId }) => stockId
);
export const clearStack = createAction('editedStocks/CEARL_ONE');
export const clearStackAll = createAction('editedStocks/CLEAR_ALL');

const initialState = { stack: {}, isSaved: true };

const reducer = handleActions(
  {
    [createEditedStock]: (state, action) => {},
    [stackEditedStocks]: (state, { payload: editedStock, meta: stockId }) => ({
      ...state,
      stack: {
        ...state.stack,
        [stockId]: {
          ...state.stack[stockId],
          ...editedStock
        }
      }
    }),
    [clearStack]: (state, action) => {},
    [clearStackAll]: (state, action) => {}
  },
  initialState
);

export default reducer;
