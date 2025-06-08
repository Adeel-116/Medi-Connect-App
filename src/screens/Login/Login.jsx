import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { validateEmail, validatePassword } from '../../utils/validation';
import colors from '../../theme/Color';
import FancyImageButton from '../../components/FancyImageButton';

const Login = ({navigation}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = () => {
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    setErrors({ email: emailErr || '', password: passwordErr || '' });

    if (!emailErr && !passwordErr) {
      console.log('Logging in...');
    }
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Hi, Welcome back, you have been missed.
        </Text>

        <View style={styles.form}>
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            error={errors.email}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={errors.password}
          />

          {/* Forgot Password Text */}
          <TouchableOpacity onPress={()=> navigation.navigate("ForgotPassword")} style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton title="Login" onPress={handleLogin} />

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or sign with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.buttonContainer}>
            <FancyImageButton
              type="google"
              imageSource={require('../../assets/google-remove-bg.png')}
              onPress={() => console.log('Google pressed')}
              containerStyle={styles.authButton}
            />
            <FancyImageButton
              type="apple"
              imageSource={require('../../assets/Iphone.png')}
              onPress={() => console.log('Apple ID')}
              containerStyle={styles.authButton}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.placeholder,
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  forgotContainer: {
    marginBottom: 16,
    alignItems: 'flex-end',
  },
  forgotText: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  orText: {
    marginHorizontal: 10,
    color: colors.placeholder,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  authButton: {
    backgroundColor: '#e9ecef',
  },
});

export default Login;
