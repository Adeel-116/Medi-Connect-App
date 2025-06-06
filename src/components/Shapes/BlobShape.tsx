import React from 'react';
import { StyleSheet } from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function BlobShape() {
  return (
    
      <Svg viewBox="0 0 200 200" width={500} height={500} style={styles.svgContainer}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#7892FB" stopOpacity="1" />
            <Stop offset="100%" stopColor="#2348FD" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Path
          fill="url(#grad)"
          d="M64.6,-3.6C64.6,22.9,32.3,45.8,7.5,45.8C-17.3,45.8,-34.6,22.9,-34.6,-3.6C-34.6,-30.1,-17.3,-60.2,7.5,-60.2C32.3,-60.2,64.6,-30.1,64.6,-3.6Z"
          transform="translate(100 100)"
        />
      </Svg>
  );
}


const styles = StyleSheet.create({
    svgContainer:{
        position: 'absolute',
        backgroundColor: 'pink',
        left: -100
    }
})