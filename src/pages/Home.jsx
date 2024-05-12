import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Home() {
    const navigation= useNavigation()
    const handleClick=()=>{
        navigation.navigate("About")
    }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home page</Text>
        <View style={styles.inner}>
     <Button title='Click' onPress={handleClick}></Button>

        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    borderWidth:2,
    borderColor:"red",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"green"
  },
  inner:{
    
  }
});


export default Home
