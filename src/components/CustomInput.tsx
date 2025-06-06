import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import colors from '../theme/Color';
import fonts from '../theme/Font';
const CustomInput = ({ placeholder, secureTextEntry, value, onChangeText }:any) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  input: {
    fontFamily: fonts.regular,
    fontSize: fonts.size.text,
    color: colors.text,
  },
});

export default CustomInput;
