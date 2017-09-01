import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers'; // index is filename default

export default class App extends Component {
  
  componentWillMount() {  
    firebase.initializeApp({
      apiKey: 'AIzaSyDnSVyXv7Dfe8N-lGyDMxXlidr8unp6zcE',
      authDomain: 'whatsapp-clone-15ea0.firebaseapp.com',
      databaseURL: 'https://whatsapp-clone-15ea0.firebaseio.com',
      projectId: 'whatsapp-clone-15ea0',
      storageBucket: 'whatsapp-clone-15ea0.appspot.com',
      messagingSenderId: '452852699333'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
