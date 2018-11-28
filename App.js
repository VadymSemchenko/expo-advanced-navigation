import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';

const MainNavigator= createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen
});
const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
