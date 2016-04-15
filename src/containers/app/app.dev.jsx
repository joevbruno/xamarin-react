import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import DevTools from '../devtools';
// this would need to be added to prod version if it ever has a wrapper div like this file
import configureStore from '../../redux/Store/configStore.dev';
export const store = configureStore(); // must call here to enable hot-reloading

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Routes store={store} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
