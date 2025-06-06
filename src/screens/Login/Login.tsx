import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { validateEmail, validatePassword } from '../../utils/validation';
import colors from '../../theme/Color';

const LoginScreen = () => {
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
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Login to your account</Text>

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

          <CustomButton title="Login" onPress={handleLogin} />
          <View style={styles.divider} />
          <CustomButton title="Continue with Google" onPress={() => {}} />
          <CustomButton title="Continue with Apple ID" onPress={() => {}} />
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
  divider: {
    height: 20,
  },
});

export default LoginScreen;
