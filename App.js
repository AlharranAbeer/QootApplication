import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHNkzA-XdpqWyWLiNKrVMHbAyR39frmoo",
  authDomain: "qoot-a665e.firebaseapp.com",
  databaseURL: "https://qoot-a665e.firebaseio.com",
  storageBucket: "qoot-a665e.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>oyoyoyoyoyoy</Text>
      <Text>yuyuyuyuy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
