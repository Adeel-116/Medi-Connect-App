import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import ForgotPassword from './src/screens/ForgetPassword/ForgotPassword';
import NewPasswordScreen from './src/screens/NewPassword/NewPasswordScreen';
import SplashScreen from './src/screens/Splash/SplashScreen';
import SplashCore from './src/screens/Splash/SplashCore';
import OTP from './src/screens/OTP/OTP';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashCore"
          screenOptions={{
            headerShown: false,
            animation: 'fade', 
          }}
        >
          <Stack.Screen name="SplashCore" component={SplashCore} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen name="OTP" component={OTP} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
