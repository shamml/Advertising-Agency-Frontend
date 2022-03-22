import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import application from './features/application';
import { composeWithDevTools } from 'redux-devtools-extension';
import bilboard from './features/bilboard';

export const store = createStore(
  combineReducers({
    application,
    bilboard
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
