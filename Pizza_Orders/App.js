import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux'

import Navigations from './src/navigation'

import store from './src/store';


const App = () => {
  return (
    <Provider store={store}>
      <Navigations></Navigations>
    </Provider>
  );
};

export default App;
