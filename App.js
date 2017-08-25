import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import { Font } from 'expo';
import { auth, isAuthenticated } from './config/firebase';

import Login from './components/Login';
import Overview from './components/Overview';
import AppLoading from './components/AppLoading';
import Profile from './components/Profile';
import Activities from './components/Activities';
import Leagues from './components/Leagues';

import store from './redux/store'

const KongenApp = TabNavigator({
  Overview: { 
    screen: Overview, 
    navigationOptions: {}
}, Leagues: { 
    screen: Leagues, 
    navigationOptions: {title: 'Leagues'}
}, Activities: { 
    screen: Activities, 
    navigationOptions: {title: 'Activity'}
}, Profile: { 
    screen: Profile, 
    navigationOptions: {title: 'Profile'}
}
});

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isReady: false,
      loggedIn: false
    }
  }

  getUserStatus(){
    auth.onAuthStateChanged((user) => {
        if(user){
          this.setState({isReady: true, loggedIn: true});
        }
        else{
          this.setState({isReady: true, loggedIn: false});
        }
    });
  }

  async componentWillMount() {
    await Font.loadAsync({
      'josefin-sans': require('./fonts/JosefinSans-Light.ttf')
      // 'Ionicons': re   quire('native-base/Fonts/Ionicons.ttf'),
    });
    this.getUserStatus();
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }
    else if(!this.state.loggedIn){
      return <Login loggedIn={() => this.setState({loggedIn: true})}/>
    ;
    }
    else{
      return (
      <Provider store={store}>
        <KongenApp />
      </Provider>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
