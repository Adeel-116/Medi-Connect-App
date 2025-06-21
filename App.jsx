// App.js
import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/Splash/SplashScreen';
import SplashCore from './src/screens/Splash/SplashCore';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import NewPasswordScreen from './src/screens/NewPassword/NewPasswordScreen';
import OTP from './src/screens/OTP/OTP';
import ForgotPassword from './src/screens/ForgetPassword/ForgotPassword';
import BottomTabs from './src/screens/Navigation/BottomTabs';

import { AuthProvider, AuthContext } from './src/context/AuthContext';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const { user, loading } = useContext(AuthContext);

  // SplashCore ko loading state ke liye use karte hain
  if (loading) {
    return <SplashCore />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // User logged in, main app dikhayen
        <Stack.Screen name="MainApp" component={BottomTabs} />
      ) : (
        // User nahi hai to auth screens dikhaen
        <>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> */}
        </>
      )}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}

export default App;
