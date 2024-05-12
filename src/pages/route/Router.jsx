import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import About from '../About';

const Stack=createNativeStackNavigator()

function Router() {
    
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
        statusBarColor:"black",
        headerStyle:{
            backgroundColor:"green",
         
        },
        headerShown:false,
         headerTintColor:"black",
          headerTitleAlign:"center"
    }}>
    <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="About" component={About}/>
        
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router