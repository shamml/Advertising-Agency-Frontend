import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import application from './features/application';
import stformat from './features/stformat';
import bilboard from './features/bilboard';
import cart from './features/cart';
import order from './features/order';
import reviews from './features/reviews';

export const store = createStore(
  combineReducers({
    application,
    bilboard,
    stformat,
    cart,
    reviews,
    order,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
