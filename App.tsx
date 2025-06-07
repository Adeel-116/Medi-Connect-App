import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import ForgotPassword from './src/screens/ForgetPassword/ForgotPassword';
import NewPasswordScreen from './src/screens/NewPassword/NewPasswordScreen';
import VerifyOtp from './src/screens/VerifyOTP/verifyOTP';


function App() {
  return ( 
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <VerifyOtp />
      </SafeAreaView>
    </>
  );
}

export default App;
