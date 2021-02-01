import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import request from './request';
import stocks from './stocks';
import stock from './stock';

const rootReducer = combineReducers({
  request,
  stocks,
  stock
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default store;
