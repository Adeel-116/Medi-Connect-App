import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import colors from '../theme/Color';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string | null;
}

const CustomInput: React.FC<Props> = ({ placeholder, value, onChangeText, secureTextEntry, error }) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.input, error && { borderColor: 'red' }]}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});

export default CustomInput;
