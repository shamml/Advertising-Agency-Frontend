import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import application from './features/application';
import {cart} from './features/cart';
import stformat from './features/stformat';
import { composeWithDevTools } from 'redux-devtools-extension';
import bilboard from './features/bilboard';

export const store = createStore(
  combineReducers({
    application,
    bilboard,
    stformat,
    cart,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
