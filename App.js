import {View} from 'react-native';
import React from 'react';

import Home from './src/screens/Home';
import Profile from './src/screens/Profifle';

import {Provider} from 'react-redux';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <View flex={1}>
        <View flex={1}>
          <Home />
        </View>

        <View flex={1}>
          <Profile />
        </View>
      </View>
    </Provider>
  );
}

// redux
// adalah tools untuk memanage state

// store
// adalah tempat penyimpanan yang lebih besar

// reducer
// adalah tempat penyimpanan yang lebih spesifik

// action
// adalah setter untuk memberi nilai ke suatu state pada reducer /& store kita
