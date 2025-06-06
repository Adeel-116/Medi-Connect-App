import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';

function App() {
  return ( 
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Signup />
      </SafeAreaView>
    </>
  );
}

export default App;
