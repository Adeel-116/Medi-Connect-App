import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhoneNumber
} from '../../utils/validation';
import colors from '../../theme/Color';
import FancyImageButton from '../../components/FancyImageButton';
import CheckBoxIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


const Signup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignup = async () => {
    const newErrors = {
      fullName: validateName(formData.fullName),
      email: validateEmail(formData.email),
      phoneNumber: validatePhoneNumber(formData.phoneNumber),
      password: validatePassword(formData.password),
      termsAccepted: termsAccepted ? null : 'You must accept the terms',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err !== null);
    if (hasErrors) {
      return;
    }

    try {
      console.log('Sending data:', formData);
      const response = await axios.post('http://192.168.100.2:3000/signup', formData);
      console.log('User registered:', response.data);
      // Navigate or show success message if needed
    } catch (error) {
      if (error.response) {
        console.log('Server error:', error.response.data);
      } else {
        console.log('Network error:', error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Create an Account</Text>
          <Text style={styles.subtitle}>
            Create your account by filling in the information below, or sign up
            with social media.
          </Text>

          <View style={styles.form}>
            <CustomInput
              placeholder="Full Name"
              value={formData.fullName}
              onChangeText={val => handleChange('fullName', val)}
              error={errors.fullName}
            />
            <CustomInput
              placeholder="Email"
              value={formData.email}
              onChangeText={val => handleChange('email', val)}
              error={errors.email}
            />
            <CustomInput
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChangeText={val => handleChange('phoneNumber', val)}
              error={errors.phoneNumber}
            />
            <CustomInput
              placeholder="Password"
              value={formData.password}
              onChangeText={val => handleChange('password', val)}
              secureTextEntry
              error={errors.password}
            />

            <View style={styles.termsContainer}>
              <TouchableOpacity
                onPress={() => setTermsAccepted(prev => !prev)}
                activeOpacity={0.7}
              >
                <CheckBoxIcon
                  name={termsAccepted ? 'checkbox-outline' : 'square-outline'}
                  size={24}
                  color={'#000'}
                />
              </TouchableOpacity>
              <Text style={styles.termsText}>
                I agree to the{' '}
                <Text
                  style={styles.linkText}
                  onPress={() => console.log('Navigate to Terms')}
                >
                  Terms & Conditions
                </Text>
              </Text>
            </View>
            {!!errors.termsAccepted && (
              <Text style={styles.errorText}>{errors.termsAccepted}</Text>
            )}

            <CustomButton
              title="Sign Up"
              onPress={handleSignup}
              containerStyle={{ marginTop: 15 }}
            />

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
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  formWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.placeholder,
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 22,
  },
  form: {
    width: '100%',
    paddingVertical: 20,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termsText: {
    color: colors.text,
    fontSize: 14,
    marginLeft: 8,
  },
  linkText: {
    color: colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
    marginTop: -8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  authButton: {
    backgroundColor: '#e9ecef',
  },
});

export default Signup;
