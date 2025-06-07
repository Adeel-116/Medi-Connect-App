import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import colors from '../theme/Color';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string | null;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  onForgotPasswordPress?: () => void; 
}

const CustomInput: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
  inputStyle,
  containerStyle,
  onForgotPasswordPress,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          style={StyleSheet.flatten([
            styles.input,
            error && { borderColor: 'red' },
            secureTextEntry && { paddingRight: 100}, 
            inputStyle,
          ])}
        />
        {secureTextEntry && (
          <View style={styles.rightContainer}>
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.iconContainer}
            >
              <Icon
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={25}
                color={colors.placeholder}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  rightContainer: {
    position: 'absolute',
    right: 10,
    top: 12,
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetPasswordContainer: {
    marginTop: 4,
    alignItems: 'center',
  },
  forgetPasswordText: {
    color: colors.placeholder,
    fontSize: 12,
  },
  underline: {
    height: 1,
    backgroundColor: colors.placeholder,
    width: '100%',
    marginTop: 2,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});

export default CustomInput;
