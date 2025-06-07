import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import colors from '../../theme/Color';

const VerifyOtp = () => {
  const handleVerifyOTP = () => {
    console.log('Verify button pressed');
    // Trigger OTP verification logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => { /* Add navigation.goBack() if needed */ }}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>
          Enter the 4-digit code sent to your phone number.
        </Text>

        <CustomButton title="Verify" onPress={handleVerifyOTP} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    paddingHorizontal: 24,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 50,
    alignItems: 'center',
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
    lineHeight: 22,
  },
});

export default VerifyOtp;
