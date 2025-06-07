import { Text, StyleSheet, View, Image, Dimensions, Platform } from 'react-native'
import React, { Component } from 'react'
import colors from '../../theme/Color';

const { width, height } = Dimensions.get('window');

export default class SplashCore extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image 
            source={require("../../assets/logo-bg-remove.png")} 
            style={styles.image} 
            resizeMode="contain" 
          />
        
          <View style={styles.logoText}>
            <Text style={styles.logoTextStyling}>MediConnect</Text>
          </View>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
})
