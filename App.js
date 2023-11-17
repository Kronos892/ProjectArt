import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/navbar';
import SearchScreen from './screens/search-screen';
import MainScreen from './screens/main-screen';
import FavScreen from './screens/favourite-screen';
import ViewScreen from './screens/view-screen';
import { useState } from 'react';

export const SCREEN_NAMES = {
  MAIN: 'main',
  SEARCH: 'search',
  FAV: 'favourite',
  VIEW: 'view',
};

export default function App() {

  const [currentScreen, setCurrentScreen] = useState(SCREEN_NAMES.MAIN)
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Navbar style={styles.Navbar} selectScreen={setCurrentScreen} currentScreen={currentScreen}></Navbar>
      
      {currentScreen === SCREEN_NAMES.MAIN && <MainScreen/>}
      {currentScreen === SCREEN_NAMES.SEARCH && <SearchScreen/>}
      {currentScreen === SCREEN_NAMES.FAV && <FavScreen/>}
      {currentScreen === SCREEN_NAMES.VIEW && <ViewScreen/>}
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // regóła określająca, że to element nadrzędny
    backgroundColor: '#081526',
    color: '#fff',
    justifyContent: 'flex-end',
  },
  Navbar: {
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    bottom: 0,

  },
  Text: {
    color: "#fff",
  }
  
});



