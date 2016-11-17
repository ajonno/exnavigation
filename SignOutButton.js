
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
   Actions
} from '@exponent/ex-navigation';


export default class SignOutButton extends React.Component {

   signOut(){

   }

   render() {
      return (
         <TouchableOpacity>
            <Text>Sign out</Text>
         </TouchableOpacity>
     );
   }
 }
