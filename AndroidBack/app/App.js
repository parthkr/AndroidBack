/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux'
import FirstScreen from './screens/firstScreen';
import SecondScreen from './screens/secondScreen';
import ThirdScreen from './screens/thirdScreen';

export default class App extends Component {
  render() {
    return (
      <Router backAndroidHandler={() => this.onBackAndroid()}>
        <Scene key='key' initial hideNavBar>
          <Scene key='firstScreen' component={FirstScreen} />
          <Scene key='secondScreen' component={SecondScreen} />
          <Scene key='thirdScreen' component={ThirdScreen} />
        </Scene>
      </Router>
    )
  }
  onBackAndroid = () => {
    console.log('Actions', Actions.currentScene)
    console.log('Actions index', Actions.state.index)
    if (Actions.state.index === 0) {
      return false
    }
    Actions.pop()
    return true; // Return true to stay, or return false to exit the app.
  }
}

