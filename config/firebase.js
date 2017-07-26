import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

let config = {
  apiKey: "AIzaSyBWnecjJ8DY56sjbSFWXxQW2RILnef-V4k",
  authDomain: "kongen-a937c.firebaseapp.com",
  databaseURL: "https://kongen-a937c.firebaseio.com",
  projectId: "kongen-a937c",
  storageBucket: "kongen-a937c.appspot.com",
  messagingSenderId: "598804878270"
};

let firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); 
export const auth = firebaseApp.auth();

export const storageKey = 'kongen_072017';