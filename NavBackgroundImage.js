
import React, { Component } from 'react';
import {
   Image
} from 'react-native';

export default class NavBackgroundImage extends React.Component {

   render() {
      return (
         <Image
            style={{height: 65}}
            source={require('./navBar.png')}
         />
     );
   }
 }
