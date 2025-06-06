import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login/Login';

function App() {
  return ( 
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Login />
      </SafeAreaView>
    </>
  );
}

export default App;
