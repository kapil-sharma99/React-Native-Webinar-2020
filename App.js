import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn]  = useState(false)

  if(firebase.apps.length === 0) {
    var firebaseConfig = {
      apiKey: "AIzaSyD792P6g1IIs27dBBo0r3mLviXmaN2R8Wc",
      authDomain: "rn-masterclass-3007-todo.firebaseapp.com",
      databaseURL: "https://rn-masterclass-3007-todo.firebaseio.com",
      projectId: "rn-masterclass-3007-todo",
      storageBucket: "rn-masterclass-3007-todo.appspot.com",
      messagingSenderId: "764759944490",
      appId: "1:764759944490:web:f18c31c343dcb5cc4e0253"
    };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
        setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  });

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
        {/* <LoginScreenComponent/> */}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* <NotesScreenComponent/> */}
        <LoginScreenComponent/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <NotesScreenComponent /> */}
      <LoginScreenComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});