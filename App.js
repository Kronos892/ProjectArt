import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Navbar style={styles.Navbar}></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // regóła określająca, że to element nadrzędny
    backgroundColor: '#081526',
    color: '#fff',
    justifyContent: 'flex-end',
  },
  Navbar: {
    
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  }
  
});



