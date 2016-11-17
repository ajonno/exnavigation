import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import AboutScreen from './AboutScreen'

const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
}));

export default class HomeScreen extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  _goToAbout = () => {
      this.props.navigator.push(Router.getRoute('about'));
    }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>HomeScreen!</Text>
        <Text onPress={this._goToAbout}>
          Push about
        </Text>
      </View>
    )
  }
}
