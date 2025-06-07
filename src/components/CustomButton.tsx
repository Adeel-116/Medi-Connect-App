import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle  } from 'react-native';
import colors from '../theme/Color';

interface Props {
  title: string;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

const CustomButton: React.FC<Props> = ({ title, onPress, containerStyle }) => (
  <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress} activeOpacity={0.8}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  text: {
    color: colors.buttonText,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton;
