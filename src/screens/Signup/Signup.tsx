import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNumber,
} from '../../utils/validation';
import colors from '../../theme/Color';
import FancyImageButton from '../../components/FancyImageButton';
import CheckBoxIcon from 'react-native-vector-icons/Ionicons';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSignup = () => {
    const newErrors = {
      name: validateName(name),
      email: validateEmail(email),
      phoneNumber: validatePhoneNumber(phoneNumber),
      password: validatePassword(password),
      termsAccepted: termsAccepted ? '' : 'You must accept the terms.',
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      console.log('Signup successful!');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.formWrapper,
            {
              opacity: fadeAnim,
              transform: [{ translateY }],
            },
          ]}
        >
          <Text style={styles.title}>Create an Account</Text>
          <Text style={styles.subtitle}>
            Create your account by filling in the information below, or sign up
            with social media.
          </Text>

          <View style={styles.form}>
            <CustomInput
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              error={errors.name}
            />
            <CustomInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />
            <CustomInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              error={errors.phoneNumber}
            />
            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
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
        </Animated.View>
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
