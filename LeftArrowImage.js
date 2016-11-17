
import React, { Component } from 'react';
import {
   Image
} from 'react-native';

// import {
//    Actions
// } from '@exponent/ex-navigation';


export default class LeftArrowImage extends React.Component {

   render() {
      return (
         <Image
            style={{width: 28, height: 18, marginLeft: 5, marginTop: 14}}
            source={require('./arrowLeft.png')}
         />
     );
   }
 }
