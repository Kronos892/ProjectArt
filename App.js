import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Navbar from './navigation/Navbar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App(){
    return(
      <GestureHandlerRootView style={{flex: 1}}>
      <Navbar/>
      </GestureHandlerRootView>
    );
  
}


