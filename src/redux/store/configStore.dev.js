import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import DevTools from '../../containers/devtools';
import promiseMiddleware from 'redux-promise';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}
const reduxExtension = DevTools.instrument();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        promiseMiddleware,
      ),
      reduxExtension,
      persistState(getDebugSessionKey())
    )
  );

  return store;
}
