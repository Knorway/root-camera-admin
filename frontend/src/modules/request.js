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

const initialState = {};

const reducer = handleActions(
  {
    [startLoading]: (state, { payload: type }) => ({
      ...state,
      loading: {
        [type]: true
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
    })
  },
  initialState
);

export default reducer;
