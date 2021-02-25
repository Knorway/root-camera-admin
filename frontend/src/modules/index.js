import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import request from './request';
import stocks from './stocks';
import stock from './stock';
import editedStocks from './editedStocks';
import sales from './sales';
import searchQuery from './searchQuery';
import auth from './auth';

const rootReducer = combineReducers({
  request,
  stocks,
  stock,
  sales,
  editedStocks,
  searchQuery,
  auth
});

const store = createStore(
  rootReducer,
  {
    auth: JSON.parse(localStorage.getItem('auth') || null)
  },
  composeWithDevTools(applyMiddleware(Thunk))
);

export default store;
