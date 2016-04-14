import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import configureStore from '../../redux/store/configStore.prod';
export const store = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes store={store} />
      </Provider>
    );
  }
}
