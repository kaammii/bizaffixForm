import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBJdgxoc4ZHs758KdvEAswLCcLaJach5_8",
    authDomain: "bizaffixform.firebaseapp.com",
    databaseURL: "https://bizaffixform.firebaseio.com",
    projectId: "bizaffixform",
    storageBucket: "bizaffixform.appspot.com",
    messagingSenderId: "952813156313"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
