import React from 'react';
import { TouchableOpacity, StyleSheet, Image, ViewStyle } from 'react-native';

interface Props {
  type: 'google' | 'apple'; 
  onPress?: () => void;
  imageSource: any; 
  containerStyle?: ViewStyle;
}

const FancyImageButton: React.FC<Props> = ({ type, onPress, imageSource, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.circle, containerStyle]}
      activeOpacity={1}
    >
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 52,
    height: 52,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 26,
    height: 26,
  },
});

export default FancyImageButton;
