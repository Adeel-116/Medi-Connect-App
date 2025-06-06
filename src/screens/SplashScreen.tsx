import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image} from 'react-native'
import BlobShape from './src/components/Shapes/BlobShape'


function App() {
  return ( 
    <>
    <StatusBar barStyle="dark-content" />

    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container1}>

      <BlobShape />

       <Image 
        source={require("./src/assets/splash3.png")}
        style={styles.image}       
       />
        
      </View>


      <View style={styles.container2}>
       
      </View>

      <View style={styles.container3}>
       
      </View>

      <View style={styles.container4}>
       
      </View>



    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: 'center',   
    alignItems: 'center',
    position: 'relative',
  },
   container2: {
    flex: 1/6,
    padding: 16,
    backgroundColor: "yellow"
  },
   container3: {
    flex: 1/3,
    padding: 16,
    backgroundColor: "red"
  },
   container4: {
    flex: 1/3,
    padding: 16,
    backgroundColor: "blue"
  },
  image:{
    width: 350,   
    height: 350, 
    resizeMode: 'contain',
    marginTop: 0,
    // backgroundColor: 'green'
  }

})

export default App
