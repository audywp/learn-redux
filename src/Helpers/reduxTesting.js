import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {persistedStore, store} from '../store';

export default function ContainerTesting(component) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>{component}</PersistGate>
    </Provider>
  );
}
