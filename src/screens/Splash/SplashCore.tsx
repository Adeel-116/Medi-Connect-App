import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import colors from '../../theme/Color';

const { width, height } = Dimensions.get('window');

export default class SplashCore extends Component {
  imageOpacity = new Animated.Value(0);
  imageScale = new Animated.Value(0.5);
  textTranslateY = new Animated.Value(20);
  textOpacity = new Animated.Value(0);

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.imageOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(this.imageScale, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(300),
      Animated.parallel([
        Animated.timing(this.textTranslateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(this.textOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={require('../../assets/logo-bg-remove.png')}
            style={[
              styles.image,
              {
                opacity: this.imageOpacity,
                transform: [{ scale: this.imageScale }],
              },
            ]}
            resizeMode="contain"
          />

          <Animated.View
            style={[
              styles.logoText,
              {
                transform: [{ translateY: this.textTranslateY }],
                opacity: this.textOpacity,
              },
            ]}
          >
            <Text style={styles.logoTextStyling}>MediConnect</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Consider matching your theme
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 140,
  },
  logoText: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logoTextStyling: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: Platform.select({
      ios: 'Courier',
      android: 'monospace',
    }),
    letterSpacing: 1,
  },
});
