
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native';
import HomeScreen from './HomeScreen'

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
}));

export default class exnavigation extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
         <StackNavigation initialRoute={Router.getRoute('home')} />
       </NavigationProvider>
    );
  }
}
