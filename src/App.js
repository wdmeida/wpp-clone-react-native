import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

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
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
