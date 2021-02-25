import { createAction, handleActions } from 'redux-actions';
import { createRequestThunk } from './utils/createRequestThunk';
import * as api from './utils/authApi';

export const LOGIN_AUTH = 'auth/LOGIN';
const LOGIN_AUTH_SUCCESS = 'auth/LOGIN_SUCCESS';
const RESET_AUTH = 'auth/RESET';

export const loginUser = createRequestThunk(LOGIN_AUTH, api.loginUser);

const initialState = JSON.parse(localStorage.getItem('user')) || null;

const reducer = handleActions(
  {
    [LOGIN_AUTH_SUCCESS]: (state, { payload }) => payload,
    [RESET_AUTH]: (state, action) => null
  },
  initialState
);

export default reducer;
