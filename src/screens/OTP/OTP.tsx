import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/Color';
import CustomKeyboard from '../../components/CustomKeyboard';
import CustomButton from '../../components/CustomButton';

function OTP() {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  // Animation values
  const inputAnimations = useRef(otp.map(() => new Animated.Value(0))).current;
  const keyboardSlide = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    // Animate each input box one after another
    const animations = inputAnimations.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: index * 150,
        useNativeDriver: true,
      })
    );

    // Animate keyboard slide in
    Animated.parallel([
      Animated.stagger(100, animations),
      Animated.timing(keyboardSlide, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => console.log('Back pressed')}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Text Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>
          Please enter the code we just sent to email
        </Text>
        <Text style={{ color: colors.primary }}>adeel8128377@gmail.com</Text>
      </View>

      {/* OTP Inputs with Animation */}
      <View style={styles.inputContainer}>
        {otp.map((value, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: inputAnimations[index],
              transform: [
                {
                  translateY: inputAnimations[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            }}
          >
            <TextInput
              ref={ref => {
                inputs.current[index] = ref;
              }}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              value={value}
              onChangeText={text => {
                const newOtp = [...otp];
                newOtp[index] = text;
                setOtp(newOtp);
                if (text && index < otp.length - 1) {
                  inputs.current[index + 1]?.focus();
                }
              }}
            />
          </Animated.View>
        ))}
      </View>

      {/* Verify Button */}
      <View style={styles.verifyButton}>
        <CustomButton title="Verify OTP" onPress={() => ''} />
      </View>

      {/* Animated Keyboard */}
      <Animated.View
        style={[
          styles.customKeyboard,
          {
            transform: [{ translateY: keyboardSlide }],
          },
        ]}
      >
        <CustomKeyboard onKeyPress={() => ''} />
      </Animated.View>
    </View>
  );
}

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topBar: {
    paddingTop: StatusBar.currentHeight || 12,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
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
    fontSize: 15,
    color: colors.placeholder,
    textAlign: 'center',
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    width: 50,
    height: 60,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center',
  },
  verifyButton: {
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  customKeyboard: {
    position: 'absolute',
    bottom: '5%',
  },
});
