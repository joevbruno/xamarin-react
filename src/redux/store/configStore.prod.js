import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
    // Middleware you want to use in development:
      applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        promiseMiddleware,
      )
    )
  );
  return store;
}
