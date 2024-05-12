import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Router from './src/pages/route/Router';

export default function App() {
  return (
   <>
    <Router/>
   </>
  );
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
});
