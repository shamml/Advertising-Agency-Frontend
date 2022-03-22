import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import application from './features/application';
import stformat from './features/stformat'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  combineReducers({
    application,
    stformat,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
