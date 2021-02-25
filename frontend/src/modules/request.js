import { createAction, handleActions } from 'redux-actions';

export const startLoading = createAction('request/START_LOADING');
export const finishLoading = createAction('request/FINISH_LOADING');
export const errorDuringRequest = createAction(
  'request/ERROR_LOADING',
  ({ type, error }) => ({
    type,
    error
  })
);
export const clearRequest = createAction('request/CLREA_ALL');
export const clearRequestError = createAction('request/CLEAR_ERROR');

const initialState = {};

const reducer = handleActions(
  {
    [startLoading]: (state, { payload: type }) => ({
      ...state,
      loading: {
        [type]: true
      },
      error: {
        [type]: null
      }
    }),
    [finishLoading]: (state, { payload: type }) => ({
      ...state,
      loading: {
        [type]: false
      }
    }),
    [errorDuringRequest]: (state, { payload: { type, error } }) => ({
      ...state,
      error: {
        [type]: error
      }
    }),
    [clearRequestError]: (state, action) => ({
      ...state,
      error: null
    }),
    [clearRequest]: () => initialState
  },
  initialState
);

export default reducer;
