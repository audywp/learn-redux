import React from 'react';

import {Provider} from 'react-redux';
import {persistedStore, store} from './src/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

import Root from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Root />
      </PersistGate>
    </Provider>
  );
}
