import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text} >Ogólnie to chwilowo się</Text>
      <Text>Możemy teoretycznie też w ten sposób pracować</Text>
      <Navbar></Navbar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081526',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: '#fff'
  }
});



