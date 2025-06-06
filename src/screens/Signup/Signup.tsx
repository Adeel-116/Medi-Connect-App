import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
  validatePhoneNumber,
} from '../../utils/validation';
import colors from '../../theme/Color';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const handleSignup = () => {
    const newErrors = {
      name: validateName(name),
      email: validateEmail(email),
      phoneNumber: validatePhoneNumber(phoneNumber),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      console.log('Signup successful!');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Create Account 🚀</Text>
        <Text style={styles.subtitle}>Join us by filling in the information below</Text>

        <View style={styles.form}>
          <CustomInput placeholder="Full Name" value={name} onChangeText={setName} error={errors.name} />
          <CustomInput placeholder="Email" value={email} onChangeText={setEmail} error={errors.email} />
          <CustomInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} error={errors.phoneNumber} />
          <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry error={errors.password} />
          <CustomInput placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry error={errors.confirmPassword} />

          <CustomButton title="Sign Up" onPress={handleSignup} />

          <View style={styles.divider} />

          <CustomButton title="Continue with Google" onPress={() => {}} />
          <CustomButton title="Continue with Apple ID" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.placeholder,
    marginBottom: 24,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  divider: {
    height: 20,
  },
});

export default Signup;
