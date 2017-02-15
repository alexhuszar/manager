import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'

import reducers from './reducers';
import Router from './Router'

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA6ndHr_qqs7jhFSAG5S7jo8RsMXRpwG6I',
      authDomain: 'manager-da051.firebaseapp.com',
      databaseURL: 'https://manager-da051.firebaseio.com',
      storageBucket: 'manager-da051.appspot.com',
      messagingSenderId: '135175832787'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App;
