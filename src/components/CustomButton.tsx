import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../theme/Color';

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<Props> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
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
