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

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHNkzA-XdpqWyWLiNKrVMHbAyR39frmoo",
    authDomain: "qoot-a665e.firebaseapp.com",
    databaseURL: "https://qoot-a665e.firebaseio.com",
    projectId: "qoot-a665e",
    storageBucket: "qoot-a665e.appspot.com",
    messagingSenderId: "82769274821",
    appId: "1:82769274821:web:a0f4bfd8df5e9151534dac",
    measurementId: "G-8XLPJFX1BV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>*/