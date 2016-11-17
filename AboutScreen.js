import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import SignOutButton from './SignOutButton'
import LeftArrowImage from './LeftArrowImage'
import NavBackgroundImage from './NavBackgroundImage'


export default class AboutScreen extends React.Component {
   static route = {
    navigationBar: {
//      title: 'Title goes here',
      renderLeft: (route, props) => <LeftArrowImage />,
      // renderRight: (route, props) => <SignOutButton />,
      renderBackground: (route, props) => <NavBackgroundImage />
    }
   }

  _goBackHome = () => {
     console.log("sdfsdgsfg");
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>AboutScreen!</Text>
        <Text onPress={this._goBackHome}>
          Go back home
        </Text>
      </View>
    )
  }

}
