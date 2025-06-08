// components/Toast.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Toast = ({ type = 'success', message, onHide }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Animate in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Auto dismiss
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onHide?.());
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const bgColor = type === 'success' ? '#4BB543' : '#FF4C4C';
  const icon = type === 'success' ? 'checkmark-circle-outline' : 'close-circle-outline';

  return (
    <Animated.View style={[styles.toastContainer, { backgroundColor: bgColor, opacity: fadeAnim }]}>
      <Ionicons name={icon} size={22} color="#fff" style={{ marginRight: 8 }} />
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    zIndex: 9999,
  },
  toastText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
});

export default Toast;
