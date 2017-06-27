import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA82OHLtBviJsrvC0tZFttslDKfI_npdxA',
      authDomain: 'auth-967ee.firebaseapp.com',
      databaseURL: 'https://auth-967ee.firebaseio.com',
      projectId: 'auth-967ee',
      storageBucket: 'auth-967ee.appspot.com',
      messagingSenderId: '909940362483'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
