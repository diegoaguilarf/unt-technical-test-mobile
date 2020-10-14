/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/store';

import Screens from './src/screens';
import { Header, Footer } from './src/components';

const store = configureStore();


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <Header />
        <Screens />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
