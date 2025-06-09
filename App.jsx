import React, { useEffect, useState } from 'react';
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



const Stack = createNativeStackNavigator();

function App() {
  const [initialRoute, setInitialRoute] = useState('SplashCore');

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialRoute('SplashScreen');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {initialRoute === 'SplashCore' ? (
            <Stack.Screen name="SplashCore" component={SplashCore} />
          ) : (
            <>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="OTP" component={OTP} />
              <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

               <Stack.Screen name="MainApp" component={BottomTabs} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
