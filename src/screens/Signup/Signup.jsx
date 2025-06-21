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
import BackButton from '../../components/BackButton'; 
import { validateEmail,
  validatePassword,
  validateName,
  validatePhoneNumber,
} from '../../utils/validation.js';
import colors from '../../theme/Color';
import FancyImageButton from '../../components/FancyImageButton';
import CheckBoxIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import CustomToast from '../../components/CustomToast';

const Signup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ visible: false, message: '', type: 'info' });

  const showToast = (message, type = 'info') => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: '', type }), 3000);
  };

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
      showToast('Please fix the errors above.', 'error');
      return;
    }

    try {
      const response = await axios.post('http://192.168.100.2:3000/signup', formData);
      if (response.status === 201 || response.status === 200) {
        showToast('Account created successfully! 🎉', 'success');
        navigation.navigate('Login');
      }
    } catch (error) {
      if(error.response?.status === 401) {
        showToast('Email already exists. Please use a different email.', 'error');
        return;
      }
      let msg = 'Something went wrong.';
      if (error.response?.data?.message) {
        msg = error.response.data.message;
      }
      showToast(msg, 'error');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>
                Fill in your details below or sign up with social media
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <CustomInput
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChangeText={val => handleChange('fullName', val)}
                  error={errors.fullName}
                  style={styles.enhancedInput}
                />
                <CustomInput
                  placeholder="Email Address"
                  value={formData.email}
                  onChangeText={val => handleChange('email', val)}
                  error={errors.email}
                  style={styles.enhancedInput}
                />
                <CustomInput
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChangeText={val => handleChange('phoneNumber', val)}
                  error={errors.phoneNumber}
                  style={styles.enhancedInput}
                />
                <CustomInput
                  placeholder="Password"
                  value={formData.password}
                  onChangeText={val => handleChange('password', val)}
                  secureTextEntry
                  error={errors.password}
                  style={styles.enhancedInput}
                />
              </View>

              <TouchableOpacity 
                style={styles.termsContainer}
                onPress={() => setTermsAccepted(prev => !prev)}
                activeOpacity={0.7}
              >
                <View style={[styles.checkbox, termsAccepted && styles.checkboxChecked]}>
                  <CheckBoxIcon
                    name={termsAccepted ? 'checkmark' : ''}
                    size={16}
                    color={termsAccepted ? '#fff' : 'transparent'}
                  />
                </View>
                <Text style={styles.termsText}>
                  I agree to the{' '}
                  <Text style={styles.linkText}>Terms & Conditions</Text>
                  {' '}and{' '}
                  <Text style={styles.linkText}>Privacy Policy</Text>
                </Text>
              </TouchableOpacity>
              
              {!!errors.termsAccepted && (
                <Text style={styles.errorText}>{errors.termsAccepted}</Text>
              )}

              <CustomButton 
                title="Create Account" 
                onPress={handleSignup} 
                containerStyle={styles.signupButton} 
              />

              <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or continue with</Text>
                <View style={styles.dividerLine} />
              </View>

              <View style={styles.socialButtonContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <FancyImageButton
                    type="google"
                    imageSource={require('../../assets/google-remove-bg.png')}
                    onPress={() => console.log('Google pressed')}
                    containerStyle={styles.socialButtonInner}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <FancyImageButton
                    type="apple"
                    imageSource={require('../../assets/Iphone.png')}
                    onPress={() => console.log('Apple ID')}
                    containerStyle={styles.socialButtonInner}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.loginPrompt}>
                <Text style={styles.loginPromptText}>
                  Already have an account?{' '}
                  <Text 
                    style={styles.loginPromptLink}
                    onPress={() => navigation.navigate('Login')}
                  >
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>


        <CustomToast visible={toast.visible} message={toast.message} type={toast.type} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40, // Compensate for back button
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 2,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 28,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  enhancedInput: {
    marginBottom: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#d1d5db',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#667eea',
    borderColor: '#667eea',
  },
  termsText: {
    flex: 1,
    color: '#374151',
    fontSize: 14,
    lineHeight: 20,
  },
  linkText: {
    color: '#667eea',
    fontWeight: '600',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginBottom: 12,
    marginLeft: 4,
  },
  signupButton: {
    marginTop: 24,
    marginBottom: 24,
    borderRadius: 16,
    height: 56,
    backgroundColor: '#667eea',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#6b7280',
    fontSize: 14,
    fontWeight: '500',
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    overflow: 'hidden',
  },
  socialButtonInner: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
  },
  loginPrompt: {
    alignItems: 'center',
    marginTop: 8,
  },
  loginPromptText: {
    color: '#6b7280',
    fontSize: 14,
  },
  loginPromptLink: {
    color: '#667eea',
    fontWeight: '600',
  },
});

export default Signup;