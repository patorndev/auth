import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA82OHLtBviJsrvC0tZFttslDKfI_npdxA',
      authDomain: 'auth-967ee.firebaseapp.com',
      databaseURL: 'https://auth-967ee.firebaseio.com',
      projectId: 'auth-967ee',
      storageBucket: 'auth-967ee.appspot.com',
      messagingSenderId: '909940362483'
    });

    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    };
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
