import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const PolygonShape = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Svg height="200" width="300" style={""}>
        <Polygon
          points="63,52 300,118 300,188 0,186 0,114"
          fill="#00BFFF"
          stroke="black"
          strokeWidth="3"
        />
      </Svg>
    </View>
  );
};

export default PolygonShape;


const styles = StyleSheet{
  absolutePosition:{
    
  }
}